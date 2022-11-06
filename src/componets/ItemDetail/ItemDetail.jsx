/*import './ItemDetail.css'
import { CartContext } from '../../CartContext/CartContext'
import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount.jsx'
import { Link } from 'react-router-dom'
import NotificationContext from '../../Notification/NotificationService'

const ItemDetail = ({id, img, name, category, price, description, stock }) => {

    const {setNotification} = useContext(NotificationContext)

    const [goToCart, setGoToCart] = useState (false)

    const {addItem} = CartContext ( );

    const onAdd = (count) => {
        const productToAdd = {
            id,
            name,
            category,
            price,
            description
        }
        addItem (productToAdd, count);
        setNotification('success', 'Producto agregado')
        setGoToCart(true)
};
    return (
        
       <div className='containerDetail'>
            <img src={img} alt={name}/>
            <h1 className="name">{name}</h1>
            <h3 className="category">{category}</h3>
            <p className="price"> ${price}</p>
            <p className= "description ">{description}</p> 
            { goToCart
                ? <Link to='/cart'>Terminar Compra</Link>
                :<ItemCount onAdd={onAdd} stock={stock}/>
            }
    
    </div> 
    
    )
}

export default ItemDetail*/ 

import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { useContext } from 'react'
import { CartContext } from '../../CartContext/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';


//Componente de visualización de ItemDetailContainer con contador

const ItemDetail = ({ id, img, name, category, price, stock, description }) => {

    const { addItem, isInCart, getProductQuantity } = useContext(CartContext)

    // Funciones del contador
    //Paso los datos
    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id,
            name,
            category,
            price,
            description,
            quantity,
            stock,
        }
        const showingAlert = withReactContent(Swal)
        showingAlert.fire({
            position: 'center',
            icon: 'success',
            title: <strong>{name} agregado</strong>,
            html: <i>Su producto se encuentra en el carrito</i>,
            showConfirmButton: false,
            timer: 1600
        })
        //Agrego el producto
        addItem(productToAdd)
    }

    const quantityAdded = getProductQuantity(id)

    return (
        <div class="wrapper">
            <div class="outer">
                <div class="content animate__animated animate__fadeInLeft">
                    <span class="bg">EXCLUSIVO</span>
                    <h1>{name}</h1>
                    <p>Descripción del producto: {description}</p>
                        <footer>
                         {stock !==0 ? <ItemCount onAdd={handleOnAdd} stock={stock} initial={quantityAdded} category={category}/>
                        :<h2 className='stock'>SIN STOCK</h2>}
                        {isInCart(id) && <Link to= '/cart' className= 'bg'>FINALIZAR COMPRA</Link>}
                       </footer>
                       <span class="bg animated fadeInDown">PRECIO: ${price}</span>
                </div>
                <img src={img} alt={name} width="300px" class="animate__animated animate__fadeInRight img2"/>
            </div>
        </div>
    )
}

export default ItemDetail

