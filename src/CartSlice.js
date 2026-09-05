import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const product = action.payload
            const item = state.items.find((entry) => entry.id === product.id)

            if (item) {
                item.quantity += 1
            } else {
                state.items.push({ ...product, quantity: 1 })
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload
            const item = state.items.find((entry) => entry.id === id)
            const nextQuantity = Number(quantity)

            if (!item || !Number.isInteger(nextQuantity) || nextQuantity < 0) {
                return
            }

            if (nextQuantity === 0) {
                state.items = state.items.filter((entry) => entry.id !== id)
                return
            }

            item.quantity = nextQuantity
        },
        clearCart: (state) => {
            state.items = []
        },
    },
})

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer
