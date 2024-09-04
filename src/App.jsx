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

const router = createBrowserRouter([
	{
		element: <HomeLayout></HomeLayout>,
		errorElement: <Error></Error>,
		path: "/",
		children: [
			{ index: true, element: <Landing></Landing> },
			{ path: "products", element: <Products></Products> },
			{ path: "products/:id", element: <SingleProduct></SingleProduct> },
			{ path: "about", element: <About></About> },
			{ path: "cart", element: <Cart></Cart> },
			{ path: "checkout", element: <Checkout></Checkout> },
			{ path: "orders", element: <Orders></Orders> },
		],
	},
	{
		element: <Register></Register>,
		path: "/register",
	},
	{
		element: <Login></Login>,
		path: "/login",
	},
]);

const App = () => {
	return <RouterProvider router={router}></RouterProvider>;
};
export default App;
