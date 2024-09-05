import axios from "axios";
const productionUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
	baseURL: productionUrl,
});

export const formatPrice = (price) => {
	const dollarsAmount = new Intl.NumberFormat("en-us", {
		style: "currency",
		currency: "USD",
	}).format((price / 100).toFixed(2));
	return dollarsAmount;
};

export const generateAmount = (number) => {
	return Array.from({ length: number }, (item, index) => {
		const amount = index + 1;
		// For every element, return one new option with the amount == its index + 1.
		return (
			<option key={amount} value={amount}>
				{amount}
			</option>
		);
	});
};

export default customFetch;
