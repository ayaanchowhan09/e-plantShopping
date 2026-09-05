import { useDispatch } from 'react-redux'
import { removeItem, updateQuantity } from './CartSlice'

function CartItem({ item }) {
    const dispatch = useDispatch()

    if (!item) {
        return null
    }

    const changeQuantity = (quantity) => {
        dispatch(updateQuantity({ id: item.id, quantity }))
    }

    return (
        <article className="cart-item">
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <div className="quantity-controls">
                    <button type="button" onClick={() => changeQuantity(item.quantity - 1)}>
                        -
                    </button>
                    <span>Quantity: {item.quantity}</span>
                    <button type="button" onClick={() => changeQuantity(item.quantity + 1)}>
                        +
                    </button>
                </div>
                <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                <button className="remove-button" type="button" onClick={() => dispatch(removeItem(item.id))}>
                    Remove
                </button>
            </div>
        </article>
    )
}

export default CartItem
