import {configureStore} from '@reduxjs/toolkit'
import userSliceReducer from './userSlice'
import productSliceReducer from './productSlice'
import cartSliceReducer from './cartSlice'

const store = configureStore({
    reducer:{
        user: userSliceReducer,
        product:productSliceReducer,
        cart:cartSliceReducer
    }
})

export default store