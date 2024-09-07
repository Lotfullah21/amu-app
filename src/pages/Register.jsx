import { FormInput, SubmitBtn } from "../components";
import { Form, Link, redirect, useNavigation } from "react-router-dom";
import customFetch from "../utils";
import { toast } from "react-toastify";
import { useState } from "react";

export const action = async ({ request }) => {
	// Get the form data form request object when the  user submits the form
	const formData = await request.formData();
	// Create an object out of the data
	const data = Object.fromEntries(formData);

	try {
		const response = await customFetch.post("/auth/local/register", data);
		toast.success("account created");
		return redirect("/login");
	} catch (error) {
		const errorMessage =
			error?.response?.data?.error?.message ||
			"please check your user name or password";
		toast.error(errorMessage);
	}

	return null;
};

const Register = () => {
	const [showPassword, setShowPassword] = useState(false);

	// Function to toggle password visibility
	const togglePasswordVisibility = () => {
		setShowPassword((prev) => !prev);
	};

	return (
		<section className="h-screen grid place-items-center ">
			<Form
				method="POST"
				className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
				<h4 className="text-center text-3xl font-bold">Register</h4>
				<FormInput
					type="text"
					label="username"
					name="username"
					defaultValue="king"></FormInput>
				<FormInput type="email" label="email" name="email"></FormInput>
				<div className="relative">
					<FormInput
						type={showPassword ? "text" : "password"}
						label="password"
						name="password"></FormInput>
					{/* Toggle button for show/hide password */}
					<button
						type="button"
						onClick={togglePasswordVisibility}
						className="absolute inset-y-0 right-0 pt-9 pr-3 text-sm leading-5 flex items-center h-full">
						{showPassword ? "Hide" : "Show"}
					</button>
				</div>

				<div className="mt-4">
					<SubmitBtn text="register"></SubmitBtn>
				</div>
				<p className="text-center">
					Already a member?
					<Link
						to="/login"
						className="ml-2 link link-hover link-primary capitalize">
						login
					</Link>
				</p>
			</Form>
		</section>
	);
};
export default Register;
