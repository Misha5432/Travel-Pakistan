import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  webs:localStorage.getItem('webs') ? JSON.parse(localStorage.getItem('webs')) : []
}

export const webSlice = createSlice({
  name: 'web',
  initialState,
  reducers: {
    increment: (state) => {
      
    },
    decrement: (state) => {
      
    },
    incrementByAmount: (state, action) => {
      
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = webSlice.actions

export default webSlice.reducer