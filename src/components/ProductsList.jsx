import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

const ProductsGrid = () => {
	const { products } = useLoaderData();

	return (
		<div className="mt-12 grid gap-y-4">
			{products.map((product) => {
				const { title, price, image: img, company } = product.attributes;
				const dollarsAmount = formatPrice(price);
				return (
					<Link
						key={product.id}
						to={`/products/${product.id}`}
						className="p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group">
						<img
							src={img}
							key={title}
							className="h-40 w-40 rounded-lg sm:h-38 sm:w-38 object-cover group-hover:scale-105 transition duration-300"></img>
						<div className="ml-0 sm:ml-20">
							<h3 className="capitalize font-medium text-xl">{title}</h3>
							<h4 className="capitalize font-medium text-neutral-content">
								{company}
							</h4>
						</div>
						<p className="ml-0 sm:ml-auto text-neutral-content">
							{dollarsAmount}
						</p>
					</Link>
				);
			})}
		</div>
	);
};
export default ProductsGrid;
