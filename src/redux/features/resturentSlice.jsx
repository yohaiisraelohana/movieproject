import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    resturents:[]
}

const resturentSlice = createSlice({
    name:"resturents",
    initialState,
    reducers:{
        setResturents: (state,action) => {
            state.resturents = action.payload;
            localStorage.setItem("resturents",state.resturents.toString());
        },
        getSingleResturent: (state,action) => {
            console.log(action.payload);
        }
    }
})

export const {setResturents} = resturentSlice.actions;
export default resturentSlice.reducer;