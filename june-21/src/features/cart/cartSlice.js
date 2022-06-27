import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true,
    vote: 0,
    timer: 0
};

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        increase: (state, action) => {
            state.timer = state.timer + 1
        },
        decrease: (state, action) => {
            state.timer = state.timer - 1
        },
        timerC: (state, action) => {
            state.timer = 0
        }
    }
})
// console.log(cartSlice.actions)

export const {increase, decrease, timerC} = cartSlice.actions;

export default cartSlice.reducer;