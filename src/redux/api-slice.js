import { createSlice } from "@reduxjs/toolkit";


const apiSlice=createSlice({
    name:"api",
    initialState: {countries:[]},
    reducers:{
        loadCountries(state,action){
            state.countries=action.payload.countries
        }
    }
})

export const apiActions=apiSlice.actions

export default apiSlice