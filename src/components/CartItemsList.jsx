import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartItemsList = () => {
	const { cartItems } = useSelector((state) => state.cartState);
	console.log("cart items", cartItems);

	return (
		<>
			{cartItems.map((item) => {
				return <CartItem key={item.cartID} cartItem={item}></CartItem>;
			})}
		</>
	);
};
export default CartItemsList;
