import axios from 'axios'
import { toast } from 'react-toastify'
import { interceptorLoadingElements } from './formatters'
import { refreshTokenAPI } from '~/apis'
import { logoutUserAPI } from '~/redux/user/userSlice'
// Không thể import { store } from './redux/store' theo cách thông thường
// Sử dụng Inject store: khi cần sử dụng biến redux store ở các file ngoài phạm vi component như file này
let axiosReduxStore
export const injectStore = mainStore => { axiosReduxStore = mainStore }

// Khởi tạo một đowis tượng Axios (authorizedAxiosInstance) mục đích để custom và cấu hình chung cho dự án
let authorizedAxiosInstance = axios.create()

// Thời gian chờ tối đa của một request: 10p
authorizedAxiosInstance.defaults.timeout = 10 * 60 * 1000
// withCredentials: cho phép axios tự động gửi cookie trong mỗi request lên BE (phục vụ việc lưu JWT tokens (refresh & access) vào trong httpOnly cookie của trình duyệt)
authorizedAxiosInstance.defaults.withCredentials = true

// Cấu hình Interceptors (bộ đánh chặn vào giữa mọi Request và Response)
//https://axios-http.com/docs/interceptors

// Add a request interceptor(Can thiệp vào giữa những request API)
authorizedAxiosInstance.interceptors.request.use((config) => {
  // Kĩ thuật chặn spam click (xem kỹ mô tả ở file formatters chứa function interceptorLoadingElements)
  interceptorLoadingElements(true)
  return config
}, (error) => {
  // Do something with request error
  return Promise.reject(error)
})

// Khởi tạo một promise cho việc gọi api refresh_token
// Mục đích: để khi nào gọi api refresh_token xong thì mới retry lại nhiều api bị lỗi trước đó
let refreshTokenPromise = null

// Add a response interceptor(Can thiệp vào giữa những response API)
authorizedAxiosInstance.interceptors.response.use((response) => {
  // Kĩ thuật chặn spam click (xem kỹ mô tả ở file formatters chứa function interceptorLoadingElements)
  interceptorLoadingElements(false)

  return response
}, (error) => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  // Mọi mã http status nằm ngoài khoảng 2xx sẽ là error và rơi vào đây

  // Kĩ thuật chặn spam click (xem kỹ mô tả ở file formatters chứa function interceptorLoadingElements)
  interceptorLoadingElements(false)

  // Xử lý  refresh token tự động
  // Nếu lỗi 401, gọi api đăng xuất
  if (error.response?.status === 401) {
    axiosReduxStore.dispatch(logoutUserAPI(false))
  }

  // Nếu lỗi 410 - GONE thì tự động gọi api refresh token để lấy access token mới
  // Đầu tiên lấy các request đang bị lỗi ra thông qua error.config
  const originalRequests = error.config
  console.log('Original Request:', originalRequests)
  if (error.response?.status === 410 && !originalRequests._retry) {
    // Gán thêm một giá trị _retry = true trong khoảng thời gain chờ, đảm bảo việc refresh token chỉ luôn gọi 1 lần tại một thời điểm
    originalRequests._retry = true

    // Kiểm tra nếu chưa có refreshTokenPromise thì thực hiện gán việc gọi api refresh token đồng thời gán vào refreshTokenPromise
    if (!refreshTokenPromise) {
      refreshTokenPromise = refreshTokenAPI()
        .then(data => {
          return data?.accessToken
        })
        .catch((_error) => {
          // Nếu lỗi thì logout
          axiosReduxStore.dispatch(logoutUserAPI(false))
          return Promise.reject(_error)
        })
        .finally(() => {
          // Dù api có thành công hay lỗi thì vẫn luông gán lại refreshTokenPromise về null như ban đầu
          refreshTokenPromise = null
        })
    }
    // Cần return trường hợp refreshTokenPromise chạy thành công và xử lí thêm ở đây:
    // eslint-disable-next-line no-unused-vars
    return refreshTokenPromise.then(accessToken => {

      // Return lại axios instance  kết hợp các originalRequests để gọi lại những api ban đầu bị lỗi
      return authorizedAxiosInstance(originalRequests)
    })

  }

  // Xử lý tập trung phần hiển thị thông báo lỗi trả về tự mọi API ở đây
  // console.log error sẽ thấy cấu trúc data dẫn tới message lỗi như dưới đây
  let errorMessage = error?.message
  if (error.response?.data?.message) {
    errorMessage = error.response.data.message
  }
  // Dùng toastify để hiển thị thông báo lỗi - ngoại trừ 410 - GONE phục vụ việc tự động refresh token
  if (error.response?.status !== 410) {
    toast.error(errorMessage)
  }

  return Promise.reject(error)
})

export default authorizedAxiosInstance