import { useLoaderData } from "react-router-dom";
import { formatPrice, customFetch, generateAmount } from "../utils";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

const singleProductQuery = (id) => {
	return {
		queryKey: ["singleProduct", id],
		queryFn: () => customFetch(`/products/${id}`),
	};
};

export const loader =
	(queryClient) =>
	async ({ params }) => {
		const response = await queryClient.ensureQueryData(
			singleProductQuery(params.id)
		);
		const product = response.data.data;
		return { product };
	};

const SingleProduct = () => {
	const { product } = useLoaderData();
	const { image, price, title, description, colors, company } =
		product.attributes;

	const dollarsAmount = formatPrice(price);
	const [productColor, setProductColor] = useState(colors[0]);
	const [amount, setAmount] = useState(1);
	const handleAmount = (e) => {
		setAmount(parseInt(e.target.value));
	};

	const cartProduct = {
		cartID: product.id + productColor,
		productID: product.id,
		image,
		title,
		price,
		company,
		productColor,
		amount,
	};
	const dispatch = useDispatch();

	const addToCart = () => {
		dispatch(addItem({ product: cartProduct }));
	};

	return (
		<section>
			<div className="text-md breadcrumbs">
				<ul>
					<li>
						f<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/products">Products</Link>
					</li>
				</ul>
			</div>

			{/* PRODUCTS */}
			<div className="mt-6 grid gap-y-8 lg:grid-cols-2 gap-x-16">
				{/* IMAGE */}
				<img
					src={image}
					alt={title}
					className="w-96 h-96 object-cover rounded-lg lg:w-full"></img>
				{/* Info */}
				<div>
					<h1 className="capitalize text-3xl font-bold">{title}</h1>
					<h4 className="text-xl text-neutral-content mt-2 font-bold">
						{company}
					</h4>
					<p className="mt-3 text-xl">{dollarsAmount}</p>
					<p className="mt-3 text-xl leading-8">{description}</p>
					{/* COLORS */}
					<div className="mt-6 ">
						<h4 className="text-md font-medium tracking-wider capitalize">
							colors
						</h4>
						<div className="mt-2 ">
							{colors.map((color) => {
								return (
									<button
										className={`badge rounded-full  w-6 h-6 mr-2 ${
											color === productColor && "border-2 border-secondary"
										}`}
										type="button"
										style={{ backgroundColor: color }}
										onClick={() => setProductColor(color)}
										key={color}></button>
								);
							})}
						</div>
					</div>

					{/* AMOUNT */}
					<div className="form-control w-full max-w-xs">
						<label className="label" htmlFor="amount">
							<h4 className="text-md font-medium tracking-wider capitalize">
								amount
							</h4>
						</label>
						<select
							name=""
							id="amount"
							className="select select-secondary select-bordered select-md"
							value={amount}
							onChange={handleAmount}>
							{generateAmount(8)}
						</select>
					</div>
					{/* CART BTN */}
					<div className="mt-10">
						<button className="btn btn-secondary btn-md" onClick={addToCart}>
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
export default SingleProduct;
