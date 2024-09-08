# My Project

[AMU-APP](https://amu-app.netlify.app/)

A React-based web application using Tailwind CSS, DaisyUI, Redux, React Query, and Axios for state management, styling, and API interactions. The app implements dynamic routing with React Router and manages themes and cart functionality.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```sh
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. ## Install dependencies:

```sh
npm install

```

3. ## Start the development server:

```sh
npm run dev


```

## Folder Structure

```sh
.
├── public
├── src
│   ├── components  # Reusable components like Navbar, Footer
│   ├── pages       # Page components (e.g., Home, About, Product)
│   ├── redux       # Redux slices and store
│   ├── hooks       # Custom React hooks for fetching data, managing state
│   ├── App.jsx     # Main App component
│   ├── index.css   # Tailwind CSS imports
│   └── main.jsx    # Application entry point
├── tailwind.config.cjs  # Tailwind CSS configuration
├── postcss.config.cjs   # PostCSS configuration
└── package.json


```

## Technologies Used

React: JavaScript library for building user interfaces
Tailwind CSS: Utility-first CSS framework
DaisyUI: Tailwind CSS-based component library
Redux: State management library
Axios: Promise-based HTTP client for API requests
React Router: Declarative routing for React applications
React Query: Asynchronous state management for data fetching
react-toastify: Notifications for React applications

### Few steps for completion of the project

```sh

npm create vite@latest my-project -- --template react
cd my-project
```

Install Tailwind CSS

```sh

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Configure your template paths

```sh
tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add the Tailwind directives to

```css
index.css

@tailwind base;
@tailwind components;
@tailwind utilities;

```

Start using Tailwind in your project

```jsx
export default function App() {
	return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}
```

```sh

```

### Daisy ui

```sh
npm i -D daisyui@latest
npm install @tailwindcss/typography

```

```sh
module.exports = {
  //...
  plugins: [
    require('daisyui'),
  ],
}
```

## Installation of packages

```sh
npm install redux react-redux @reduxjs/toolkit
npm install react-icons
npm install react-toastify
npm install @tanstack/react-query
npm install axios
npm install react-router-dom
npm i nanoid
```

# 1. Setting up the routes

## React route

React Router is a popular library for handling routing in React applications. It allows you to create and manage different routes (URLs) within your single-page application (SPA). With React Router, you can define which components should be rendered when users navigate to specific paths in your application.

### Key Features of React Router:

- Dynamic Routing: Unlike traditional routing in multi-page apps, React Router enables dynamic routing where the page does not reload when navigating between routes. It provides a seamless user experience by updating only the necessary parts of the page.

- Route Components: React Router lets you define routes in your application using the <Route> component. Each route corresponds to a specific URL path and renders the component associated with that path.

- Navigation: The <Link> component is used to navigate between different routes without reloading the page. This allows for smooth transitions and maintains the state of the application.

- Nested Routes: You can create nested routes, allowing for complex layouts where components are rendered within other components based on the route.

- URL Parameters: React Router allows you to define routes with dynamic parameters, enabling you to pass data through the URL and access it within your components.

- Programmatic Navigation: You can navigate programmatically using hooks like useNavigate or with the history object to redirect users to different routes based on certain conditions.

- Route Guards: You can protect certain routes by creating guards that check for conditions (like authentication) before allowing access to the route.

### Benefits of Using React Router:

- Single-Page Application Experience: React Router helps in building SPAs where the user experience is smooth and uninterrupted by full-page reloads.
- Modular Design: It allows for modular code by separating concerns, where each component handles a specific part of the application based on the route.
- Flexibility: React Router is highly flexible and can be used to build complex routing structures, including nested routes and dynamic parameters.

```jsx
	<FormInput
					type="email"
					label="email"
					name="identifier"
					defaultValue="test@test.com"></FormInput>
				<FormInput
					type="password"
					label="password"
					name="password"
					defaultValue="secret"></FormInput>
```

# Why Identifier

### Flexibility:

Identifier allows for more flexibility in your login system. For example, if you decide to allow users to log in with either their email address or their username in the future, you won't need to change the name of the input field or the underlying logic.

### Generic Naming:

Using "identifier" as the name makes it clear that the field is meant to uniquely identify the user, without being specific about how the identification is done. It’s a more abstract name that covers all potential identification methods.

### Backend Consistency:

Some systems or backends might use "identifier" as a standard field name in their APIs or database schemas for authentication purposes. Using "identifier" in your frontend code aligns with that convention.

### Why NavLink

Because it adds the active class to our links.

```js
import { NavLink } from "react-router-dom";
```

### Themes

document.documentElement refers to the root <html> element of the document

```js
document.documentElement.setAttribute("data-theme", theme);
```

## Daisy ui

`group`, cool property for having transition effect on individual elements.

```css
	<Link
						key={product.id}
						to={`/products/${product.id}`}
						className="p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group">
						<img
							src={img}
							key={title}
							className="h-32 w-32 rounded-lg sm:h-38 sm:w-38 object-cover group-hover:scale-105 transition duration-300"></img>
					</Link>
```

## Getting the search params

### Method-1

```js
const url = "/products";
export const loader = async ({ request }) => {
	const params = new URL(request.url).searchParams;
	const search = params.get("search");
	console.log(search);
};
```

### Method-2

## URLSearchParams Utility:

URLSearchParams makes it easier to read, modify, and construct query strings without manually manipulating strings.
Common methods include:

- get(name): Gets the value of a specific query parameter.
- set(name, value): Sets or updates a query parameter.
- delete(name): Removes a specific query parameter.
- toString(): Converts the parameters back to a query string.

## Cart Reducers

Initial setup

```js
const cartSlice = createSlice({
	name: "cart",
	initialState: getItemFromLocalStorage(),
	reducers: {
		addItem: (state, action) => {
			const { product } = action.payload;
			const item = state.cartItems.find((x) => {
				if (x.id === product.id) {
					return true;
				} else {
					return false;
				}
			});
			if (item) {
				item.amount = item.amount + product.amount;
			} else {
				state.cartItems.push(product);
			}
			state.numItemsInCart = state.numItemsInCart + product.amount;
			state.cartTotal = state.cartTotal + product.price * product.amount;
			state.tax = 0.1 * state.cartTotal;
			state.orderTotal = state.tax + state.cartTotal + state.shipping;
			localStorage.setItem("cart", JSON.stringify(state));
			toast.success("Item added");
		},
		clearCart: (state, action) => {},
		removeItem: (state, action) => {},
		editItem: (state, action) => {},
```

#### Theme Logic in Navbar

```jsx
const themes = {
	cmyk: "cmyk",
	light: "light",
	business: "business",
};

const getThemeFromLocalStorage = () => {
	return localStorage.getItem("theme") || themes.cmyk;
};
```

#### Moving the toggle theme

```jsx
const getThemeFromLocalStorage = () => {
	const theme = localStorage.getItem("theme") || themes.cmyk;
	// adding to HTML element
	document.documentElement.setAttribute("data-theme", theme);
};

const initialState = {
	user: { username: "amu" },
	theme: getThemeFromLocalStorage(),
};
```

To have the toggle theme functionality in user login as well.

## Action

an "action" refers to an event or function that is triggered in response to user interactions or some lifecycle event. Actions can be used to update the state, call an API, or dispatch something via a state management tool like Redux.
