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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Loaders
import { loader as landingLoader } from "./pages/Landing";
import { loader as SingleProductLoader } from "./pages/SingleProduct";
import { loader as productLoader } from "./pages/Products";
import { loader as checkoutLoader } from "./pages/Checkout";
import { loader as OrderLoader } from "./pages/Orders";

// Actions
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as checkoutAction } from "./components/CheckoutForm";

// Store
import { store } from "./store";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5,
		},
	},
});

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
				loader: landingLoader(queryClient),
			},
			{
				path: "products",
				element: <Products></Products>,
				errorElement: <ErrorElement></ErrorElement>,
				loader: productLoader(queryClient),
			},
			{
				path: "products/:id",
				element: <SingleProduct></SingleProduct>,
				loader: SingleProductLoader(queryClient),
			},
			{ path: "about", element: <About></About> },
			{ path: "cart", element: <Cart></Cart> },
			{
				path: "checkout",
				element: <Checkout></Checkout>,
				loader: checkoutLoader(store),
				action: checkoutAction(store, queryClient),
			},
			{
				path: "orders",
				element: <Orders></Orders>,
				loader: OrderLoader(store, queryClient),
			},
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
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router}></RouterProvider>
		</QueryClientProvider>
	);
};
export default App;
