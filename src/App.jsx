import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import AboutUs from "./AboutUs";
import CartItem from "./CartItem";
import ProductList from "./ProductList";
import { addItem } from "./CartSlice";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Snake Plant",
    price: 24.99,
    category: "Indoor Plants",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Snake%20Plant%20%28Sansevieria%20trifasciata%20%27Laurentii%27%29.jpg?width=500",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 19.99,
    category: "Indoor Plants",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Peace%20lily%20-%202.jpg?width=500",
  },
  {
    id: 7,
    name: "ZZ Plant",
    price: 27.99,
    category: "Indoor Plants",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Zamioculcas%20zamiifolia.jpg?width=500",
  },
  {
    id: 8,
    name: "Rubber Plant",
    price: 32.99,
    category: "Indoor Plants",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ficus%20elastica%20-%20La%20Palma%2003.jpg?width=500",
  },
  {
    id: 9,
    name: "Spider Plant",
    price: 18.99,
    category: "Indoor Plants",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Chlorophytum%20comosum%20%28%20spider%20grass%29.jpg?width=500",
  },
  {
    id: 10,
    name: "Chinese Evergreen",
    price: 22.99,
    category: "Indoor Plants",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Aglaonema%20commutatum.jpg?width=500",
  },
  {
    id: 3,
    name: "Aloe Vera",
    price: 16.99,
    category: "Succulents",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Aloe%20vera%20Lanzarote.jpg?width=500",
  },
  {
    id: 4,
    name: "Echeveria",
    price: 14.99,
    category: "Succulents",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Echeveria%20agavoides%2003.jpg?width=500",
  },
  {
    id: 11,
    name: "Haworthia",
    price: 15.99,
    category: "Succulents",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/1%20Haworthia%20cooperi%20-%20Kirstenbosch.jpg?width=500",
  },
  {
    id: 12,
    name: "Jade Plant",
    price: 21.99,
    category: "Succulents",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Crassula%20ovata%202012.jpg?width=500",
  },
  {
    id: 13,
    name: "String of Pearls",
    price: 17.99,
    category: "Succulents",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Senecio%20rowleyanus.jpg?width=500",
  },
  {
    id: 14,
    name: "Burro's Tail",
    price: 18.99,
    category: "Succulents",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Burro%27s%20tail%20%28sedum%20morganianum%29.jpg?width=500",
  },
  {
    id: 5,
    name: "Monstera Deliciosa",
    price: 39.99,
    category: "Tropical Plants",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    name: "Bird of Paradise",
    price: 44.99,
    category: "Tropical Plants",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Bird%20of%20Paradise%20Plant.jpg?width=500",
  },
  {
    id: 15,
    name: "Fiddle Leaf Fig",
    price: 42.99,
    category: "Tropical Plants",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ficus%20lyrata.jpg?width=500",
  },
  {
    id: 16,
    name: "Calathea",
    price: 29.99,
    category: "Tropical Plants",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Calathea%20orbifolia.jpg?width=500",
  },
  {
    id: 17,
    name: "Anthurium",
    price: 34.99,
    category: "Tropical Plants",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Anthurium%20andraeanum.jpg?width=500",
  },
  {
    id: 18,
    name: "Parlor Palm",
    price: 26.99,
    category: "Tropical Plants",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Chamaedorea%20elegans.jpg?width=500",
  },
];

function LandingPage() {
  const navigate = useNavigate();
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="landing-page background-image">
      <div className="landing-content">
        <h1>e-plantShopping</h1>
        <p>
          Welcome to e-plantShopping — your one-stop shop for beautiful
          indoor plants.
        </p>

        <button
          type="button"
          aria-pressed={showProducts}
          onClick={() => {
            setShowProducts(true);
            navigate("/products");
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

function CartPage({ cart }) {
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="cart-page" aria-labelledby="cart-title">
      <h1 id="cart-title">Shopping Cart</h1>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is currently empty.</p>
          <Link className="secondary-button" to="/products">
            Browse plants
          </Link>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-list">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <p className="cart-total">Total: ${total.toFixed(2)}</p>
          <div className="cart-actions">
            <button className="secondary-button" type="button" onClick={() => navigate("/products")}>
              Continue Shopping
            </button>
            <button className="checkout-button" type="button" onClick={() => window.alert("Checkout is ready for your order.")}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

function CartNavigation({ itemCount }) {
  const navigate = useNavigate();

  return (
    <button className="cart-button" type="button" onClick={() => navigate("/cart")}>
      Cart ({itemCount})
    </button>
  );
}

function SiteHeader({ itemCount }) {
  return (
    <header className="site-header">
      <Link className="brand" to="/">
        e-plantShopping
      </Link>
      <nav aria-label="Main navigation">
        <Link to="/products">Plants</Link>
        <Link to="/about">About us</Link>
        <CartNavigation itemCount={itemCount} />
      </nav>
    </header>
  );
}

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const addToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <>
      <SiteHeader itemCount={itemCount} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/products"
          element={<ProductList products={products} onAddToCart={addToCart} />}
        />
        <Route path="/cart" element={<CartPage cart={cart} />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
