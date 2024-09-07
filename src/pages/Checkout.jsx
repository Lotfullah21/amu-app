import { toast } from "react-toastify";
import { CheckoutForm, SectionTitle, CartTotals } from "../components";
import { useSelector } from "react-redux";
import { redirect } from "react-router-dom";

// Make a request to get the user details from server if existed, but we cannot directly use useSelector, hence pass the store to the loader.
export const loader = (store) => async () => {
	const user = store.getState().userState.user;
	if (!user) {
		toast.warn("you must be logged in to checkout");
		return redirect("/login");
	}
	// for default case
	return null;
};

const Checkout = () => {
	const cartTotal = useSelector((state) => state.cartState.cartTotal);

	if (cartTotal === 0) {
		return <SectionTitle text="your cart is empty"></SectionTitle>;
	}
	return (
		<>
			<SectionTitle text="place your order"></SectionTitle>
			<div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
				<CheckoutForm></CheckoutForm>
				<CartTotals></CartTotals>
			</div>
		</>
	);
};
export default Checkout;
