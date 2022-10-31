import { createSlice } from '@reduxjs/toolkit'
import { mens } from '../../data'
import { woman } from '../../data'

const initialState = {
    mens,
    woman,
    cart: [],
    amount: 0,
    total: 0
}

export const productSlice = createSlice({
    name: "cartItems",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload)
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cart = state.cart.filter((item) => item.id !== itemId)
        },
        clearItems: (state) => {
            state.cart = []
        },
        cartTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cart.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        }

    }
})

export const { addToCart, removeItem, clearItems, cartTotals } = productSlice.actions
export default productSlice.reducer;