import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart(state, action){
            const item = state.items.find(item => item.productId === action.payload.productId)
            if(item){
                item.quantity += action.payload.quantity
            }else{
                state.items.push(action.payload)
            }
            
        },
        removeItem(state, action){
            state.items = state.items.filter(item => item.productId !== action.payload)
        },
        changeQuantity(state, action) {
            const {productId, quantity} = action.payload
            const indexProductId = (state.items).findIndex(item => item.productId === productId)
            if(quantity > 0){
                state.items[indexProductId].quantity = quantity
            }else{
                delete state.items[indexProductId]
            }
        }
    }
})

export const selectAllcarts = state => state.cart.items
export const { addToCart, changeQuantity, removeItem } = cartSlice.actions
export default cartSlice.reducer