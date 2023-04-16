import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    resturents:[],
    presented_resturent:{},
}
//in add state.restu...length
const resturentSlice = createSlice({
    name:"resturents",
    initialState,
    reducers:{
        setResturents: (state,action) => {
            state.resturents = action.payload;
            localStorage.setItem("resturents",state.resturents.toString());
        },
        setSingleResturent: (state,action) => {
            console.log(action);
            state.presented_resturent = state.resturents.find((r) => {
                return r.id == action.payload
            });

        }
    }
})

export const {setResturents ,setSingleResturent} = resturentSlice.actions;
export default resturentSlice.reducer;