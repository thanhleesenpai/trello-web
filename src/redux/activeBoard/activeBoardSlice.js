import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_ROOT } from '~/utils/constants'
import { mapOrder } from '~/utils/sorts'
import { generatePlaceholderCard } from '~/utils/formatters'
import { isEmpty } from 'lodash'

// Khởi tạo giá trị State của một Slice trong redux
const initialState = {
  currentActiveBoard: null
}

// Các hành động gọi api (bất đồng bộ) và cập nhật dữ liệu vào Redux, dùng Middleware createAsyncThunk đi kèm với extraReducers
//https://redux-toolkit.js.org/api/createAsyncThunk
export const fetchBoardDetailAPI = createAsyncThunk(
  'activeBoard/fetchBoardDetailAPI',
  async (boardId) => {
    const response = await axios.get(`${API_ROOT}/v1/boards/${boardId}`)
    // Lưu ý: axios sẽ trả kết quả về qua property của nó là data
    return response.data
  }
)

// Khởi tạo một Slice trong redux store
export const activeBoardSlice = createSlice({
  name: 'activeBoard',
  initialState,
  // Reducers: nơi xử lý dữ liệu đồng bộ
  reducers: {
    // Lưu ý: luôn luôn cần cặp ngoặc nhọn cho function trong reducer dù chỉ có một dòng code(rule của redux)
    updateCurrentActiveBoard: (state, action) => {
      // action.payload là chuẩn đặt tên nhận dữ liệu vào reducer, cần gán nó cho một biến có ý nghĩa hơn
      const board = action.payload
      // Xử lý dữ liệu nếu cần thiết

      // Update lại dữ liệu của currentActiveBoard
      state.currentActiveBoard = board
    }
  },
  // ExtraReducers: nơi xử lý dữ liệu bất đồng bộ
  extraReducers: (builder) =>{
    builder.addCase(fetchBoardDetailAPI.fulfilled, (state, action) => {
      // action.payload là cái response.data trả về ở trên
      let board = action.payload

      // Sắp xếp lại thứ tự của column ở đây trước khi đưa dữ liệu xuống bên dưới các commponent con(video 71)
      board.columns = mapOrder(board.columns, board.columnOrderIds, '_id')
      board.columns.forEach(column => {
        // Cần xử lí vấn đề kéo thả vào một column rỗng
        if (isEmpty(column.cards)) {
          column.cards = [generatePlaceholderCard(column)]
          column.cardOrderIds = [generatePlaceholderCard(column)._id]
        } else {
          // Sắp xếp lại thứ tự của card ở đây trước khi đưa dữ liệu xuống bên dưới các commponent con(video 71)
          column.cards = mapOrder(column.cards, column.cardOrderIds, '_id')
        }
      })
      // Update lại dữ liệu của currentActiveBoard
      state.currentActiveBoard = board
    })
  }
})

// Actions: nơi dành cho các component bên dưới gọi bằng dispatch() tới nó để cập nhật lại dữ liệu thông qua reducer
// Action được redux tạo tự động dựa trên reducer
export const { updateCurrentActiveBoard } = activeBoardSlice.actions

// Selectors: là nơi dành cho các component bên dưới gọi bằng hook useSelector() để lấy dữ liệu từ redux store
export const selectCurrentActiveBoard = (state) => {
  return state.activeBoard.currentActiveBoard
}

// File này tên là activeBoardSlice.js nhưng chúng ta sẽ export default reducer của nó
//export default activeBoardSlice.reducer
export const activeBoardReducer = activeBoardSlice.reducer