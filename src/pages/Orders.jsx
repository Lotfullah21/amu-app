import { redirect, useLoaderData } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import {
	OrdersList,
	PaginationContainer,
	SectionTitle,
	ComplexPaginationContainer,
} from "../components";

export const loader =
	(store) =>
	async ({ request }) => {
		const user = store.getState().userState.user;

		if (!user) {
			toast.warn("You must be logged in to view the orders.");
			return redirect("/login");
		}

		const params = Object.fromEntries([
			...new URL(request.url).searchParams.entries(),
		]);

		try {
			const response = await customFetch.get("/orders", {
				params,
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			});
			console.log(response);
			return { orders: response.data.data, meta: response.data.meta };
		} catch (error) {
			console.log(error);
			const errorMessage =
				error?.response?.data?.error?.message ||
				"please check your user name or password";
			toast.error(errorMessage);
			if (error.response.status === 401 || 403) {
				return redirect("/login");
			}
			return null;
		}
	};

const Orders = () => {
	const { meta } = useLoaderData();
	if (meta.pagination.total < 1) {
		return <SectionTitle text="Please make an order"></SectionTitle>;
	}

	return (
		<>
			<SectionTitle text="Your orders"></SectionTitle>
			<OrdersList></OrdersList>
			<ComplexPaginationContainer></ComplexPaginationContainer>
		</>
	);
};
export default Orders;
