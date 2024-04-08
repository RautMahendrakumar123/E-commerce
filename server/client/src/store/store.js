import {configureStore} from '@reduxjs/toolkit'
import userSliceReducer from './userSlice'
import productSliceReducer from './productSlice'
import cartSliceReducer from './cartSlice'
import searchSlice from './searchSlice'
import filterSlice from './filterSlice'

const store = configureStore({
    reducer:{
        user: userSliceReducer,
        product:productSliceReducer,
        cart:cartSliceReducer,
        searchProduct:searchSlice,
        filterProduct:filterSlice
    }
})

export default store