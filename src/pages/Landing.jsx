import { Hero, FeaturedProducts } from "../components";
import customFetch from "../utils";

const url = "/products/?featured=true";

const featuredProductQuery = {
	queryKey: ["featuredProducts"],
	queryFn: () => customFetch(url),
};

export const loader = (queryClient) => async () => {
	// if the query is already in cached, grab the data right away from there.
	const response = await queryClient.ensureQueryData(featuredProductQuery);
	const products = response.data.data;
	return { products };
};

const Landing = () => {
	return (
		<>
			<Hero></Hero>
			<FeaturedProducts></FeaturedProducts>
		</>
	);
};
export default Landing;
