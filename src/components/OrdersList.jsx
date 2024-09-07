import { useLoaderData } from "react-router-dom";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { Orders } from "../pages";

const OrdersList = () => {
	const { meta, orders } = useLoaderData();

	return (
		<div className="mt-8">
			<h4 className="mb-4 capitalize">total orders: {meta.pagination.total}</h4>
			<table className="table table-zebra">
				{/* Heading */}
				<thead className="">
					<tr>
						<th>Name</th>
						<th>Address</th>
						<th>Products</th>
						<th>Cost</th>
						<th className="hidden sm:block">Data</th>
					</tr>
				</thead>
				<tbody>
					{orders.map((order) => {
						const { name, address, numItemsInCart, orderTotal, createdAt } =
							order.attributes;
						const { id } = order;
						const date = day(createdAt).format("hh:mm a -MMM D , YYYY");
						return (
							<tr key={id}>
								<td>{name}</td>
								<td>{address}</td>
								<td>{numItemsInCart}</td>
								<td>{orderTotal}</td>
								<td>{date}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
export default OrdersList;
