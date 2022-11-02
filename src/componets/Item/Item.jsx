import './Item.css'
import { useNavigate } from 'react-router-dom'

const Item = ({ id, img, name, category, price }) => {
  const navigate = useNavigate()

  return (
    <div className='containerCard'>
      <div className='card' key={id}>
        <div className='imagen'>
          <img src={img} alt="" />
        </div>
        <div className="details">
          <h3>{name}</h3>
          <h5>{category}</h5>
          <p>${price}</p>
        </div>
        <button onClick={()=> navigate (`/item/${id}`)}> Ver detalle </button>
      </div>
    </div>
  )
}

export default Item