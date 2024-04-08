import { createSlice } from "@reduxjs/toolkit"


const filterSlice = createSlice({
    name:'search',
    initialState:[],
    reducers:{
        addFilterProduct(state,action){
            return action.payload
        }
    }
})

export const {addFilterProduct} = filterSlice.actions;
export default filterSlice.reducer;