import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";


const store = configureStore({
    reducer : {
        jaffa_counter : counterReducer,
    }
})


export default store
