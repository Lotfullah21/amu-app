import { useLoaderData, Form, Link } from "react-router-dom";
import { FormCheckbox, FormInput, FormInputSelector, FormRange } from "./index";

const Filters = () => {
	const { meta, params } = useLoaderData();
	const { search, price, company, category, shipping, order } = params;
	return (
		<Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
			{/* SEARCH */}
			<FormInput
				type="search"
				label="search input"
				name="search"
				defaultValue={search}
				size="input-sm"></FormInput>
			{/* CATEGORIES */}
			<FormInputSelector
				name="category"
				label="select category"
				list={meta.categories}
				size="select-sm"
				defaultValue={category}></FormInputSelector>
			{/* COMPANIES */}
			<FormInputSelector
				name="company"
				label="select company"
				list={meta.companies}
				size="select-sm"
				defaultValue={company}></FormInputSelector>
			{/* ORDER */}
			<FormInputSelector
				name="order"
				label="sort by"
				list={["a-z", "z-a", "high", "low"]}
				size="select-sm"
				defaultValue={order}></FormInputSelector>

			{/* FORM RANGE */}
			<FormRange
				name="price"
				label="select price"
				size="range-sm"
				price={price}></FormRange>
			{/* FORM CHECKBOX */}
			<FormCheckbox
				name="shipping"
				label="free shipping"
				defaultValue={shipping}
				size="checkbox-sm"></FormCheckbox>
			{/* BUTTONS */}
			<button type="submit" className="btn btn-primary btn-sm">
				search
			</button>
			<Link to="/products" className="btn btn-accent btn-sm">
				reset
			</Link>
		</Form>
	);
};
export default Filters;
