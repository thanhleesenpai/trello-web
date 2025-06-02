import { configureStore } from '@reduxjs/toolkit'
import { activeBoardReducer } from './activeBoard/activeBoardSlice'
import { userReducer } from '~/redux/user/userSlice'

//redux persists
//https://www.npmjs.com/package/redux-persist
//https://edvins.io/how-to-use-redux-persist-with-redux-toolkit
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage

// Cấu hình Redux Persist
const rootPersistConfig = {
  key: 'root',
  storage: storage, // Sử dụng localStorage
  whitelist: ['user'] // các slice được phép duy trì qua mỗi lần tải lại trang
  // blacklist: ['user'] // các slice không được phép duy trì qua mỗi lần tải lại trang
}

// Kết hợp các reducer
const reducers = combineReducers({
  activeBoard: activeBoardReducer,
  user: userReducer
})

// Tạo reducer đã được cấu hình với Redux Persist
const persistedReducers = persistReducer(rootPersistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducers,
  // Fix warning error when implement redux-persist
  middleware: (getDefaultMiddleware) =>getDefaultMiddleware({ serializableCheck: false })
})