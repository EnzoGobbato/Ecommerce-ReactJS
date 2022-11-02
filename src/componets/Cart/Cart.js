import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, removeItem, getTotal, clearCart } = useContext(CartContext)

    return (
        <div>
            {cart.map(prod => (
                    <div>
                        <h1>
                            {prod.name}
                        </h1>
                        <ul>
                            <li className="element1"> ${prod.price}</li>
                            <li className="element1"> Cantidad = {prod.quantity}</li>
                            <li className="element1"> Stock = {prod.stock}</li>
                            <button className="generator1" onClick={() => removeItem(prod.id)}>Remover</button>
                        </ul>
                    </div>
                ))

            }
            <h1> Precio total: ${getTotal}</h1>
            <button onClick={() => clearCart(cart)}>Vaciar el carrito</button>
            <button><Link className='Button' to='/checkout' >Checkout</Link></button>
        </div>
    )
}

export default Cart