import cart from '../Assets/Carrito.png'
import "./CardWidget.css"

const CardWidget = () =>{
    return(
        <div>
            <img src={cart} alt='carrito' class="imgCarrito" />
        </div>
    )
}

export default CardWidget