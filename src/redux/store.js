import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./api-slice";
import uiSlice from "./ui-slice";


const store=configureStore({
    reducer:{
        api:apiSlice.reducer,
        ui:uiSlice.reducer
    }
})
export default store