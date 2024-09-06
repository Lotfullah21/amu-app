import { useSelector } from "react-redux";
import { formatPrice } from "../utils";
const CartTotal = () => {
	const { cartTotal, shipping, tax, orderTotal } = useSelector(
		(state) => state.cartState
	);

	return (
		<div className="card bg-base-200">
			<div className="card-body">
				{/* SUBTOTAL */}
				<p className="flex justify-between text-xs border-b border-base-300 pb-2">
					<span className="font-medium">Subtotal</span>
					<span className="font-medium">{formatPrice(cartTotal)}</span>
				</p>
				{/* SHIPPING */}
				<p className="flex justify-between text-xs border-b border-base-300 pb-2">
					<span className="font-medium">shipping</span>
					<span className="font-medium">{formatPrice(shipping)}</span>
				</p>
				{/* TAX */}
				<p className="flex justify-between text-xs border-b border-base-300 pb-2">
					<span className="font-medium">tax</span>
					<span className="font-medium">{formatPrice(tax)}</span>
				</p>
				{/* TOTAL */}
				<p className="flex justify-between text-sm mt-4 pb-2">
					<span className="font-medium">Order total </span>
					<span className="font-medium">{formatPrice(orderTotal)}</span>
				</p>
			</div>
		</div>
	);
};
export default CartTotal;
