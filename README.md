# Paradise Nursery

Paradise Nursery is a React plant shop experience for browsing indoor plants,
adding products to a Redux-powered cart, and managing cart quantities.

## Features

- Landing page with a plant-focused background and Get Started navigation
- Product listings grouped by category
- Product images, names, prices, and Add to Cart controls
- Disabled Add to Cart state for products already in the cart
- Cart quantity counter and cart navigation
- Increase, decrease, and remove cart item controls
- Per-item subtotals and a reactive cart total
- About Us page
- Responsive layout for desktop and mobile screens

## Technologies

- React
- Vite
- React Router
- Redux Toolkit
- React Redux

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173/`.

Run the linter:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

## Application Routes

- `/` - Paradise Nursery landing page
- `/products` - categorized plant catalog
- `/cart` - selected products, quantities, subtotals, and total
- `/about` - company information

## Project Structure

```text
src/
├── AboutUs.jsx       # About Us page
├── App.jsx           # Routes, product data, and cart navigation
├── App.css           # Application and responsive styles
├── CartItem.jsx      # Cart item details and quantity controls
├── CartSlice.js      # Redux cart reducers and actions
├── ProductList.jsx   # Categorized product listing
├── index.css         # Global reset and base styles
├── main.jsx          # React entry point and providers
└── store.js          # Redux store configuration
```
