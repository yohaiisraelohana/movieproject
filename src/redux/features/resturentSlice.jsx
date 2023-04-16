import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    resturents:[],
    presented_resturent:{},
    rating:""
}
//in add state.restu...length
const resturentSlice = createSlice({
    name:"resturents",
    initialState,
    reducers:{
        setResturents: (state,action) => {
            state.resturents = action.payload;
            saveInLocal(state.resturents);
        },
        setSingleResturent: (state,action) => {
            console.log(action);
            state.presented_resturent = state.resturents.find((r) => {
                return r.id == action.payload
            });

        },
        addResturent: (state,action) => {
            const resturant = action.payload;
            resturant.id = Number(state.resturents.length + 1);
            console.log(resturant);
            state.resturents = [...state.resturents,resturant];
            saveInLocal(state.resturents);
        },
        updateRating: (state,action) => {
            let rate = 0;
            for (let index = 0; index < state.resturents.length; index++) {
                rate += Number(state.resturents[index].price.length);
            }
            rate /= Number(state.resturents.length);

            let new_rating = "";
            for (let index = 0; index < Number(rate.toFixed(0)); index++) {
                new_rating += "$";
            }
            state.rating = new_rating;
        },
        updateResturent: (state,action) => {
            for (let index = 0; index < state.resturents.length; index++) {
                if(action.payload.id === state.resturents[index].id){
                    state.resturents[index] = action.payload;
                }
            }
            console.log(state.resturents);
            saveInLocal(state.resturents);
        },
        deleteResturent: (state,action) => {
            state.resturents = state.resturents.filter((r)=>r.id !== action.payload);
            saveInLocal(state.resturents);
        }
    }
})

const saveInLocal = (data) => {
    localStorage.setItem("resturents",JSON.stringify(data));
}

export const {setResturents ,setSingleResturent,addResturent,updateRating,updateResturent,deleteResturent} = resturentSlice.actions;
export default resturentSlice.reducer;