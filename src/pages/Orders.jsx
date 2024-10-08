import { redirect, useLoaderData } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import {
	OrdersList,
	PaginationContainer,
	SectionTitle,
	ComplexPaginationContainer,
} from "../components";

const ordersQuery = (params, user) => {
	return {
		queryKey: [
			"orders",
			user.username,
			params.page ? parseInt(params.page) : 1,
		],
		queryFn: () => {
			return customFetch.get("/orders", {
				params,
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			});
		},
	};
};

export const loader =
	(store, queryClient) =>
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
			const response = await queryClient.ensureQueryData(
				ordersQuery(params, user)
			);

			return { orders: response.data.data, meta: response.data.meta };
		} catch (error) {
			const errorMessage =
				error?.response?.data?.error?.message ||
				"please check your user name or password";
			toast.error(errorMessage);
			if (error?.response?.status === 401 || 403) {
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
