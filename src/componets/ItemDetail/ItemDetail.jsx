import'../AsyncMock'
import Counter from '../ItemCount/ItemCount.jsx'
import './ItemDetail.css'
import { useContext } from 'react'
import { CartContext } from '../../CartContext/CartContext'
import { NotificationContext }  from '../../NotificationService/NotificationService'

const ItemDetail = ({ id, img, name, category, price, stock, description }) => {
        
        const {addItem} = useContext(CartContext)
        const { setNotification } = useContext(NotificationContext)

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
            addItem(productToAdd)
            setNotification('success', `Se agrego correctamente ${quantity} ${name}`)
           
          }

          return(

       <div className='containerDetail'>
            <img src={img} alt={name}/>
            <h1 className="name">{name}</h1>
            <h4 className="category">Categoria: {category}</h4>
            <p className="price"> ${price}</p>
            <p className="stock">Cantidad en stock inmediato: {stock}</p>
            <p className= "description ">{description}</p> 
            <Counter onAdd={handleOnAdd} stock={stock} />
        </div> 

    )
}

export default ItemDetail