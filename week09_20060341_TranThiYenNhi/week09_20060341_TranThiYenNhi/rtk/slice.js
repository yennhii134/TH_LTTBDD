import {createSlice} from "@reduxjs/toolkit";   

const initialState = {
    number1: 0,
    number2: 0,
    result: 0,
}

export const reducerSlice = createSlice({
    name: "reducer",
    initialState,
    reducers: {
        add: (state) => {
            state.result = +state.number1 + +state.number2;
        },
        minus: (state) => {
            state.result = +state.number1 - +state.number2;
        },
        mutil: (state) => {
            state.result = +state.number1 * +state.number2;
        },
        div: (state) => {
            state.result = +state.number1 / +state.number2;
        },
        setOne: (state, {payload}) => {
            state.number1 = payload;
        },
        setTwo: (state, {payload}) => {
            state.number2 = payload;
        },

    },
});

export const {add, minus, mutil, div, setOne, setTwo} = reducerSlice.actions;
export default reducerSlice.reducer;