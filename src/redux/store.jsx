import { configureStore } from "@reduxjs/toolkit"
import resturentReducer from "./features/resturentSlice";

const store = configureStore({
    reducer:{
        resturentReducer,
    }
})

export default store;