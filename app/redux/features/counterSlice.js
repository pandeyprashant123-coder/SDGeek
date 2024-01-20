import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  globalScore: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1

      if (state.value % 5 === 0) {
        state.globalScore += 1;
      }
    },
    decrement: (state) => {
      if (state.value > -1) {
        state.value -= 1;
      }
    },
    updateIt: (state, actions) => {
      const data =actions.payload
      return {...state,globalScore:data}
    }
  },
})

export const { increment, decrement, updateIt } = counterSlice.actions

export default counterSlice.reducer