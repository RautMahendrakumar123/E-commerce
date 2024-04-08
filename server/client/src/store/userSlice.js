import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState:{
        name:'',
        email:'',
        contact:'',
        image:'',
        _id:''
    },
    reducers:{
        include(state,action){
            state._id = action.payload.data.user.id;
            state.email= action.payload.data.user.email;
            state.contact= action.payload.data.user.contact;
            state.image= action.payload.data.user.image;
            state.name= action.payload.data.user.name;
        },
        remove(state,action){
            state._id = '';
            state.email= '';
            state.contact= '';
            state.image= '';
            state.name= '';
        }
    }
})

export const {include,remove} = userSlice.actions;
export default userSlice.reducer;