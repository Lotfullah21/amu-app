import { useSelector, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";

export const store = configureStore({
	reducer: {
		cartState: cartReducer,
	},
});
