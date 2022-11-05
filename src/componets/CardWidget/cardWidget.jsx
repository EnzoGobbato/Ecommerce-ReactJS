import cart from '../Assets/Carrito.png'
import './CardWidget.css'
import { useContext } from 'react';
import { CartContext } from "../../CartContext/CartContext";
import { Link } from 'react-router-dom'


const CartWidget = () => {
 
    const { totalQuantity, total } = useContext (CartContext);

    return (
        <div className='styleCart'>
         <Link to='/cart'>  <img id="carrito" src={cart} alt="cart" />
            <div className='marginCarrito'>
                PRODUCTOS AGREGADOS: {totalQuantity}
            <br/>
                TOTAL: ${total}
            </div>
        </Link>
       </div>
    )
}

export default CartWidget