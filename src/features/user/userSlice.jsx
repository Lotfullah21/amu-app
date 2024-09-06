import { combineSlices, createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
import { toast } from "react-toastify";

const themes = {
	cmyk: "cmyk",
	light: "light",
	business: "business",
};

const getThemeFromLocalStorage = () => {
	const theme = localStorage.getItem("theme") || themes.cmyk;
	// adding to HTML element
	document.documentElement.setAttribute("data-theme", theme);
};

const getUserFromLocalStorage = () => {
	return JSON.parse(localStorage.getItem("user")) || null;
};

const initialState = {
	user: getThemeFromLocalStorage(),
	theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
	name: "user",
	initialState: initialState,
	reducers: {
		loginUser: (state, action) => {
			const user = { ...action.payload.user, ...action.payload.jwt };
			state.user = user;
			localStorage.setItem("user", JSON.stringify(user));
		},
		logoutUser: (state) => {
			state.user = null;
			localStorage.setItem("user", state.user);
			toast.success("Logged out successfully");
		},

		toggleTheme: (state) => {
			const { cmyk, business } = themes;
			state.theme = state.theme === "business" ? "cmyk" : "business";
			document.documentElement.setAttribute("data-theme", state.theme);
			localStorage.setItem("theme", state.theme);
		},
	},
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;
