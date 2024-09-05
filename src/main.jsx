import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import { store } from "./store.js";
import { Provider } from "react-redux";
import "./index.css";

createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<App />
		<ToastContainer position="top-center" autoClose={2000}></ToastContainer>
	</Provider>
);
