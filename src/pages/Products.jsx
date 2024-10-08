import { useLoaderData } from "react-router-dom";
import { PaginationContainer, Filters, ProductsContainer } from "../components";
import { customFetch } from "../utils/index";

const allProductsQuery = (queryParams) => {
	const { search, category, company, sort, price, shipping, page } =
		queryParams;
	return {
		queryKey: [
			"products",
			search ?? "",
			category ?? "all",
			company ?? "all",
			sort ?? "a-z",
			price ?? 100000,
			shipping ?? false,
			page ?? 1,
		],
		queryFn: () => {
			return customFetch(url, { params: queryParams });
		},
	};
};

const url = "/products";
export const loader =
	(queryClient) =>
	async ({ request }) => {
		const params = Object.fromEntries([
			...new URL(request.url).searchParams.entries(),
		]);

		const response = await queryClient.ensureQueryData(
			allProductsQuery(params)
		);
		const products = response.data.data;
		const meta = response.data.meta;

		return { products, meta, params };
	};

const Products = () => {
	return (
		<>
			<Filters></Filters>
			<ProductsContainer></ProductsContainer>
			<PaginationContainer></PaginationContainer>
		</>
	);
};
export default Products;
