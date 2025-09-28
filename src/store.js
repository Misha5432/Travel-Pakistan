import { configureStore } from '@reduxjs/toolkit'
import webReducer from './redux/slice.js'

export const store = configureStore({
  reducer: {
    web: webReducer
  },
})