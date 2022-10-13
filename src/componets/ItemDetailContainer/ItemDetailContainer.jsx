import { useState, useEffect } from 'react'
import { getProductById } from '../AsyncMock'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { useParams } from 'react-router-dom'



const ItemDetailContainer =() => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const {productId} = useParams()
      

    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
        
    }, [])

    return  (
        <div>

         <ItemDetail key= {product.id} {... product}/>
           
        </div>
    )
}

export default ItemDetailContainer 