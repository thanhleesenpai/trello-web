import { Routes, Route, Navigate } from 'react-router-dom'

import Board from '~/pages/Boards/_id'
import NotFound from './pages/404/NotFound'
import Auth from '~/pages/Auth/Auth'
import AccountVerification from '~/pages/Auth/AccountVerification'

function App() {
  return (
    <Routes>
      {/* Redirect Route */}
      <Route path='/' element={
        // Ở đây cần replace giá trị true để nó thay thế route /, route / sẽ không còn nằm trong history của Browser
        // Thử ấn Go home từ trang 404 xong quay lại bằng nút back của trình duyệt giữa 2 trường hợp có replace hoặc không
        <Navigate to="/boards/67d9376e571e225e74d4f307" replace={true}/>
      }/>

      {/* Board Details */}
      <Route path='/boards/:boardId' element={<Board />} />

      {/* Authentication  */}
      <Route path='/login' element={<Auth />} />
      <Route path='/register' element={<Auth />} />
      <Route path='/account/verification' element={<AccountVerification />} />

      {/* Boards List */}

      {/* 404 not found page */}
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default App
