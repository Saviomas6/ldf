import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from "../reducer/reducer"

export const store = configureStore({
  reducer: {
    counter:CounterReducer
  },
})
export type TStore = ReturnType<typeof store.getState>;