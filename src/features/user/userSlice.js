import {createSlice} from "@reduxjs/toolkit"


const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null,
        error: null
    },
    reducers:{
        fetchUserSuccess:(state, action)=>{
            //console.log("I am here!"+ action.payload)
           state.user = action.payload
        },
        fetchUserFailure: (state, action)=>{
            state.error = action.payload
        }

    }
})

export const {fetchUserFailure, fetchUserSuccess} = userSlice.actions;

export default userSlice.reducer;