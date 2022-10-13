import'../AsyncMock'
import '../ItemDetail/ItemDetail.jsx'
import Counter from '../ItemCount/ItemCount.jsx'

const ItemDetail = ({ img, name, category, price, description }) => {
    return (
        
       <div className='containerDetail'>
            <img src={img} alt={name}/>
            <h1 className="name">{name}</h1>
            <h3 className="category">{category}</h3>
            <p className="price"> ${price}</p>
            <p className= "description ">{description}</p> 
            <Counter />
        </div> 

    )
}

export default ItemDetail