import { useSelector } from 'react-redux'

function ProductList({ products = [], onAddToCart }) {
    const cartItems = useSelector((state) => state.cart.items)
    const categories = [...new Set(products.map((product) => product.category))]

    return (
        <main className="products-page" aria-labelledby="product-list-title">
            <h2 id="product-list-title">Plants</h2>
            {categories.map((category) => (
                <section className="category-section" key={category}>
                    <h3>{category}</h3>
                    <div className="product-grid">
                        {products
                            .filter((product) => product.category === category)
                            .map((product) => (
                                <article className="product-card" key={product.id}>
                                    <img className="product-image" src={product.image} alt={product.name} />
                                    <h4>{product.name}</h4>
                                    {product.price !== undefined && <p>${product.price}</p>}
                                    <button className="add-to-cart-button"
                                        type="button"
                                        onClick={() => onAddToCart(product)}
                                        disabled={cartItems.some((item) => item.id === product.id)}
                                    >
                                        {cartItems.some((item) => item.id === product.id) ? 'Added' : 'Add to cart'}
                                    </button>
                                </article>
                            ))}
                    </div>
                </section>
            ))}
        </main>
    )
}

export default ProductList
