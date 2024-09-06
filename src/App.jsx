import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
	About,
	Cart,
	Checkout,
	Error,
	HomeLayout,
	Landing,
	Login,
	Orders,
	Products,
	Register,
	SingleProduct,
} from "./pages/index";

import { ErrorElement } from "./components";

// Loaders
import { loader as landingLoader } from "./pages/Landing";
import { loader as SingleProductLoader } from "./pages/SingleProduct";
import { loader as productLoader } from "./pages/Products";

// Actions
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";

// Store
import { store } from "./store";

const router = createBrowserRouter([
	{
		element: <HomeLayout></HomeLayout>,
		errorElement: <Error></Error>,
		path: "/",
		children: [
			{
				index: true,
				element: <Landing></Landing>,
				errorElement: <ErrorElement></ErrorElement>,
				loader: landingLoader,
			},
			{
				path: "products",
				element: <Products></Products>,
				errorElement: <ErrorElement></ErrorElement>,
				loader: productLoader,
			},
			{
				path: "products/:id",
				element: <SingleProduct></SingleProduct>,
				loader: SingleProductLoader,
			},
			{ path: "about", element: <About></About> },
			{ path: "cart", element: <Cart></Cart> },
			{ path: "checkout", element: <Checkout></Checkout> },
			{ path: "orders", element: <Orders></Orders> },
		],
	},
	{
		element: <Register></Register>,
		path: "/register",
		action: registerAction,
	},
	{
		element: <Login></Login>,
		path: "/login",
		action: loginAction(store),
	},
]);

const App = () => {
	return <RouterProvider router={router}></RouterProvider>;
};
export default App;
