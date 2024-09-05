import { useState } from "react";

const FormInputSelector = ({ name, label, list, defaultValue, size, id }) => {
	const [selectedValue, setSelectedValue] = useState(defaultValue || "");

	return (
		<div className="form-control w-full max-w-xs">
			<label className="label" htmlFor={name}>
				<h4 className="label-text tracking-wider capitalize ">{label}</h4>
			</label>
			<select
				name={name}
				id={name}
				value={selectedValue}
				// defaultValue={defaultValue}
				onChange={(e) => setSelectedValue(e.target.value)}
				className={`select select-bordered ${size}`}>
				{list.map((item) => {
					return <option key={item}>{item}</option>;
				})}
			</select>
		</div>
	);
};
export default FormInputSelector;
