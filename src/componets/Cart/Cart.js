import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { Link, useNavigate } from 'react-router-dom'
import ItemCart from "../ItemCart/ItemCart"
import './Cart.css'

const Cart = () => {
    const {cart, totalQuantity, total, clearCart} = useContext(CartContext)
    const navigate = useNavigate()


    if(totalQuantity === 0) {
        return (
        <div className="CarritoVacio">
        <p> No hay elementos en el carrito </p>
        <button> <Link to='/'> Comenzar a comprar</Link> </button>
        </div>
    )
}
return (
    <div>
        <button className="buttonBack" onClick={() => navigate(-1)} >Volver</button>
        <div className="carrito">
            <h1 className="h12">RESUMEN DE SU COMPRA</h1>
            {cart.map(products => <ItemCart key={products.id} {...products}/>) }
            <p>Total a pagar: ${total}</p>
            <button onClick={() => clearCart()} className="ButtonClear">Limpiar carrito</button>
            <button><Link className='ButtonCheckout' to='/checkout' >Completá tus datos para finalizar la compra</Link></button>
        </div>
    </div>
    )
}

export default Cart 