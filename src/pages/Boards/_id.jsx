import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import { useEffect } from 'react'
//import { mockData } from '~/apis/mooc-data'

import {
  updateBoardDetailsAPI,
  updateColumnDetailsAPI,
  moveCardToDifferentColumnAPI
} from '~/apis'
import { cloneDeep } from 'lodash'
import { Box, Typography } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import {
  fetchBoardDetailsAPI,
  updateCurrentActiveBoard,
  selectCurrentActiveBoard
} from '~/redux/activeBoard/activeBoardSlice'
import { useDispatch, useSelector } from 'react-redux'


function Board() {
  const dispatch = useDispatch()
  // Không dùng state của component nữa mà chuyển qua dùng state của redux
  //const [board, setBoard] = useState(null)
  const board = useSelector(selectCurrentActiveBoard)

  useEffect(() => {
    const boardId = '67d9376e571e225e74d4f307'
    // Call API
    dispatch(fetchBoardDetailsAPI(boardId))
  }, [dispatch])

  // Gọi API và xử lý khi kéo thả column xong xuôi
  const moveColumns = (dndOrderedColumns) => {
    // Update cho chuẩn dữ liệu state Board
    const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)
    // Trường hợp này dùng Spread Operator không lỗi vì ko dùng push làm thay đổi trực tiếp kiểu mở rộng mảng mà chỉ gán lại toàn bộ giá trị columns và columnOrderIds bằng 2 mảng mới(giống cách concat ở createNewColumn)
    const newBoard = { ...board }
    newBoard.columns = dndOrderedColumns
    newBoard.columnOrderIds = dndOrderedColumnsIds
    // setBoard(newBoard)
    dispatch(updateCurrentActiveBoard(newBoard))

    // Gọi API update lại vị trí column
    updateBoardDetailsAPI(board._id, { columnOrderIds: dndOrderedColumnsIds })
  }

  // Gọi API và xử lý khi kéo thả card trong cùng một column
  const moveCardInTheSameColumn = (dndOrderedCards, dndOrderedCardIds, columnId) => {
    // Update cho chuẩn dữ liệu state Board
    // const newBoard = { ...board }
    // Cannot assign to read only property 'cards' of object
    // Trường hợp Immutability ở đây đụng tói gtri cards đang đc coi là read only - (nested object - can thiệp sâu vào dữ liệu)
    const newBoard = cloneDeep(board)
    const columnToUpdate = newBoard.columns.find(column => column._id === columnId)
    if (columnToUpdate) {
      columnToUpdate.cards = dndOrderedCards
      columnToUpdate.cardOrderIds = dndOrderedCardIds
    }
    // setBoard(newBoard)
    dispatch(updateCurrentActiveBoard(newBoard))

    // Gọi API update lại vị trí card
    updateColumnDetailsAPI(columnId, { cardOrderIds: dndOrderedCardIds })
  }

  // Khi di chuyển card từ một column này sang column khác cần :
  // 1. Cập nhật mảng cardOrderIds của column nguồn
  // 2. Cập nhật mảng cardOrderIds của column đích
  // 3. Cập nhật columnId của card
  // => Làm một API support riêng
  const moveCardToDifferentColumn = (currentCardId, prevColumnId, nextColumnId, dndOrderedColumns) => {

    // Update cho chuẩn dữ liệu state Board
    const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)
    const newBoard = { ...board }
    newBoard.columns = dndOrderedColumns
    newBoard.columnOrderIds = dndOrderedColumnsIds
    // setBoard(newBoard)
    dispatch(updateCurrentActiveBoard(newBoard))

    // Gọi API update lại vị trí card
    let prevCardOrderIds = dndOrderedColumns.find(c => c._id === prevColumnId)?.cardOrderIds
    // Xử lý trường hợp kéo card cuối cùng ra khỏi column, column sẽ có placeholder card, không xử lí card này phía backend
    if (prevCardOrderIds[0].includes('placeholder-card')) prevCardOrderIds = []

    moveCardToDifferentColumnAPI({
      currentCardId,
      prevColumnId,
      prevCardOrderIds,
      nextColumnId,
      nextCardOrderIds: dndOrderedColumns.find(c => c._id === nextColumnId)?.cardOrderIds
    })
  }

  if (!board) {
    return (
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2, width: '100vw',
        height: '100vh'
      }}>
        <CircularProgress />
        <Typography>Loading Board...</Typography>
      </Box>
    )
  }

  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <BoardBar board={board} />
      <BoardContent
        board={board}

        moveColumns={moveColumns}
        moveCardInTheSameColumn={moveCardInTheSameColumn}
        moveCardToDifferentColumn={moveCardToDifferentColumn}
      />
    </Container>
  )
}

export default Board
