import { createSlice } from "@reduxjs/toolkit"


const searchSlice = createSlice({
    name:'search',
    initialState:[],
    reducers:{
        addSearchProduct(state,action){
            return action.payload
        }
    }
})

export const {addSearchProduct} = searchSlice.actions;
export default searchSlice.reducer;