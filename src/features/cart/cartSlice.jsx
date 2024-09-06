import { createSlice, createReducer } from "@reduxjs/toolkit";
import { act } from "react";
import { json } from "react-router-dom";
import { toast } from "react-toastify";

const defaultState = {
	cartItems: [],
	numItemsInCart: 0,
	cartTotal: 0,
	shipping: 500,
	tax: 0,
	orderTotal: 0,
};
const getItemFromLocalStorage = () => {
	return JSON.parse(localStorage.getItem("cart")) || defaultState;
};

const cartSlice = createSlice({
	name: "cart",
	initialState: getItemFromLocalStorage(),
	reducers: {
		addItem: (state, action) => {
			const { product } = action.payload;
			const item = state.cartItems.find((x) => {
				if (x.cartID === product.cartID) {
					return true;
				} else {
					return false;
				}
			});
			if (item) {
				item.amount = item.amount + product.amount;
			} else {
				state.cartItems.push(product);
			}

			state.numItemsInCart = state.numItemsInCart + product.amount;
			state.cartTotal = state.cartTotal + product.price * product.amount;
			cartSlice.caseReducers.calculateTotals(state);
			console.log(product);
			toast.success("Item added");
		},
		clearCart: (state, action) => {
			localStorage.setItem("cart", JSON.stringify(defaultState));
			return defaultState;
		},
		removeItem: (state, action) => {
			const { cartID } = action.payload;
			const product = state.cartItems.find((i) => i.cartID === cartID);
			state.cartItems = state.cartItems.filter((i) => i.cartID != cartID);
			state.numItemsInCart = state.numItemsInCart - product.amount;
			state.cartTotal = state.cartTotal - product.amount * product.price;
			cartSlice.caseReducers.calculateTotals(state);
			toast.error("Items removed from cart");
		},
		editItem: (state, action) => {
			const { cartID, amount } = action.payload;
			const product = state.cartItems.find((i) => i.cartID === cartID);
			state.numItemsInCart = state.numItemsInCart + amount - product.amount;
			state.cartTotal =
				state.cartTotal + product.price * (amount - product.amount);
			product.amount = amount;
			cartSlice.caseReducers.calculateTotals(state);
			toast.success("Cart updated");
		},
		calculateTotals: (state) => {
			state.tax = 0.1 * state.cartTotal;
			state.orderTotal = state.tax + state.cartTotal + state.shipping;
			localStorage.setItem("cart", JSON.stringify(state));
		},
	},
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;
export default cartSlice.reducer;
