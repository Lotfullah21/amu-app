import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

const ProductsGrid = () => {
	const { products } = useLoaderData();
	return (
		<div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
			{products.map((product) => {
				const { title, price, image: img } = product.attributes;
				return (
					<Link
						to={`/products/${product.id}`}
						key={product.id}
						className="card w-full shadow-lg hover:shadow-2xl transition duration-300">
						<figure className="px-2 py-2">
							<img
								src={img}
								alt={title}
								className="rounded-xl h-64 md:h-46 w-full object-cover"></img>
						</figure>
						<div className="card-body items-center text-center">
							<h2 className="card-title capitalize tracking-wider">{title}</h2>
							<span className="text-secondary">{formatPrice(price)}</span>
						</div>
					</Link>
				);
			})}
		</div>
	);
};
export default ProductsGrid;
