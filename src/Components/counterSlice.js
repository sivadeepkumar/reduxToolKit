import { createSlice } from "@reduxjs/toolkit";

const initialState = {value : 0} 

const counterSlice = createSlice({
    name:"aryan",    // name is used for debugging in redux-devtools
    initialState,
    reducers : {
        increment : (state) => {
            state.value  += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByValue: (state,action) => {
            state.value += action.payload
        },
        decrementByValue: (state,action) => {
            state.value -= action.payload
        },
        reset: (state)=> {
            state.value = 0
        }
    }
})


export const {increment,decrement,incrementByValue,decrementByValue,reset} = counterSlice.actions;
export const counterReducer =  counterSlice.reducer
