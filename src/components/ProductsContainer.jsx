import { ProductsList, ProductsGrid } from "./index";
import { useState } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";

const ProductContainer = () => {
	const { meta } = useLoaderData();
	const [layout, setLayout] = useState("grid");
	const totalProducts = meta.pagination.total;

	const setActiveStyles = (pattern) => {
		return `text-xl btn btn-circle btn-sm ${
			pattern === layout
				? "btn-primary text-primary-content"
				: "btn-ghost text-based-content"
		}`;
	};

	return (
		<>
			{/* HEADER */}
			<div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
				<h4 className="font-medium text-[1.1rem]">
					{totalProducts} product{totalProducts > 1 && "s"}
				</h4>
				<div className="flex gap-x-2">
					<button
						type="button"
						onClick={() => setLayout("grid")}
						className={setActiveStyles("grid")}>
						<BsFillGridFill></BsFillGridFill>
					</button>
					<button
						type="button"
						onClick={() => setLayout("list")}
						className={setActiveStyles("list")}>
						<BsList></BsList>
					</button>
				</div>
			</div>
			{/* PRODUCTS */}

			<div>
				{totalProducts === 0 ? (
					<h5 className="mt-16 text-2xl">No Products matches your search</h5>
				) : layout === "grid" ? (
					<ProductsGrid></ProductsGrid>
				) : (
					<ProductsList></ProductsList>
				)}
			</div>
		</>
	);
};
export default ProductContainer;
