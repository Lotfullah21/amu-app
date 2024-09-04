Create your project

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
# amu-app
