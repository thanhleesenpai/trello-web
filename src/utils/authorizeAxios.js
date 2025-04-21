import axios from 'axios'
import { toast } from 'react-toastify'
import { interceptorLoadingElements } from './formatters'

// Khởi tạo một đowis tượng Axios (authorizeAxiosInstance) mục đích để custom và cấu hình chung cho dự án
let authorizeAxiosInstance = axios.create()

// Thời gian chờ tối đa của một request: 10p
authorizeAxiosInstance.defaults.timeout = 10 * 60 * 1000
// withCredentials: cho phép axios tự động gửi cookie trong mỗi request lên BE (phục vụ việc lưu JWT tokens (refresh & access) vào trong httpOnly cookie của trình duyệt)
authorizeAxiosInstance.defaults.withCredentials = true

// Cấu hình Interceptors (bộ đánh chặn vào giữa mọi Request và Response)
//https://axios-http.com/docs/interceptors

// Add a request interceptor(Can thiệp vào giữa những request API)
authorizeAxiosInstance.interceptors.request.use((config) => {
  // Kĩ thuật chặn spam click (xem kỹ mô tả ở file formatters chứa function interceptorLoadingElements)
  interceptorLoadingElements(true)
  return config
}, (error) => {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor(Can thiệp vào giữa những response API)
authorizeAxiosInstance.interceptors.response.use((response) => {
  // Kĩ thuật chặn spam click (xem kỹ mô tả ở file formatters chứa function interceptorLoadingElements)
  interceptorLoadingElements(false)

  return response
}, (error) => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  // Mọi mã http status nằm ngoài khoảng 2xx sẽ là error và rơi vào đây

  // Kĩ thuật chặn spam click (xem kỹ mô tả ở file formatters chứa function interceptorLoadingElements)
  interceptorLoadingElements(false)

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

export default authorizeAxiosInstance