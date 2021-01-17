import { configureStore } from '@reduxjs/toolkit'
import postSlice from './PostSlice'


const store = configureStore({
    reducer: postSlice
})

export default store