import {createSlice} from "@reduxjs/toolkit"


const projectSlice = createSlice({
    name:"project",
    initialState:{
        projects:null,
        error: null,
    },
    reducers:{
        fetchProjectSuccess:(state, action)=>{
            state.projects = action.payload
        },
        fetchProjectFailure: (state, action)=>{
            state.error = action.payload
        }
    }
})

export const {fetchProjectFailure, fetchProjectSuccess} = projectSlice.actions;

export default projectSlice.reducer;