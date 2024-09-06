import { formatPrice, generateAmount } from "../utils";
import { useDispatch } from "react-redux";
import { editItem, removeItem } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

const CartItem = ({ cartItem }) => {
	const {
		cartID,
		productID,
		image,
		title,
		price,
		company,
		productColor,
		amount,
	} = cartItem;

	const dispatch = useDispatch();
	const removeItemFromCart = () => {
		dispatch(removeItem({ cartID }));
	};

	const handleAmount = (e) => {
		dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
	};
	return (
		<article className="flex mb-12 flex-col gap-y-4 sm:flex-row gap-x-12 flex-wrap border-b border-b-300 pb-6 last:border-b-0">
			{/* IMAGE */}
			<img
				src={image}
				alt={title}
				className="h-28 w-28 rounded-lg  border-rounded sm:h-32 sm:w-32 object-cover"></img>
			{/* INFO */}
			<div>
				{/* TITLE */}
				<h3 className="capitalize font-medium ">{title}</h3>
				<h4 className="capitalize mt-4 font-sm neutral-content">{company}</h4>
				{/* COMPANY */}
				{/* COLOR */}
				<p className="mt-2 text-sm capitalize flex items-center gap-x-2">
					color:{" "}
					<span
						className="badge rounded-full badge-sm "
						style={{ backgroundColor: productColor }}></span>
				</p>
			</div>
			{/* AMOUNT AND REMOVE */}

			<div className="sm:ml-24">
				<div className="form-control max-w-xs">
					<label htmlFor="amount" className="label p-0">
						<span className="label-text"></span>
					</label>
					<select
						name="amount"
						value={amount}
						onChange={handleAmount}
						id="amount"
						className="mt-2 select select-base select-bordered select-xs">
						{generateAmount(amount + 5)}
					</select>
				</div>
				{/* REMOVE */}
				<button
					className="mt-2 link link-primary link-hover text-sm"
					onClick={removeItemFromCart}>
					remove
				</button>
			</div>

			{/* PRICE */}
			<p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
		</article>
	);
};
export default CartItem;
