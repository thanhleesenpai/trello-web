import { Routes, Route, Navigate, Outlet } from 'react-router-dom'

import Board from '~/pages/Boards/_id'
import NotFound from './pages/404/NotFound'
import Auth from '~/pages/Auth/Auth'
import AccountVerification from '~/pages/Auth/AccountVerification'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '~/redux/user/userSlice'

// <Outlet /> của react-router-dom sẽ hiển thị nội dung của route con bên trong nó
//https://www.robinwieruch.de/react-router-private-routes/
const ProtectedRoute = ({ user }) => {
  if (!user) {
    // Nếu người dùng chưa đăng nhập, chuyển hướng đến trang đăng nhập
    return <Navigate to="/login" replace={true} />
  }
  return <Outlet /> // Nếu đã đăng nhập, hiển thị nội dung của route được bảo vệ
}

function App() {
  const currentUser = useSelector(selectCurrentUser)

  return (
    <Routes>
      {/* Redirect Route */}
      <Route path='/' element={
        // Ở đây cần replace giá trị true để nó thay thế route /, route / sẽ không còn nằm trong history của Browser
        // Thử ấn Go home từ trang 404 xong quay lại bằng nút back của trình duyệt giữa 2 trường hợp có replace hoặc không
        <Navigate to="/boards/67d9376e571e225e74d4f307" replace={true}/>
      }/>

      {/* Protected Routes(Chỉ cho truy cập khi đã login) */}
      <Route element={<ProtectedRoute user={currentUser}/>}>
        {/* <Outlet /> của react-router-dom sẽ chạy vào các child route trong này */}
        {/* Board Details */}
        <Route path='/boards/:boardId' element={<Board />} />
      </Route>

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
