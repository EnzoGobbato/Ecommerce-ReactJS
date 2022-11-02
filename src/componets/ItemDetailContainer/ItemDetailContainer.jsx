import { useState, useEffect } from 'react'
import { getProductById } from '../AsyncMock'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { useParams, useNavigate } from 'react-router-dom'
import './ItemDetailContainer.css'
import { DotSpinner } from '@uiball/loaders'
import {getDoc, doc} from 'firebase/firestore'
import { db } from '../Services/Firebase'



const ItemDetailContainer =() => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const {productId} = useParams()

    const navigate = useNavigate()

    useEffect(() => {

        const docRef = doc(db, 'products', productId)

        getDoc(docRef).then(response => {
            const data = response.data()
            const productAdapted = { id: response.id, ...data } 
            setProduct (productAdapted)
        }).finally(()=>{
            setLoading(false)
        })
    }, [productId])

    if (loading){
        return ( 
            <div className= "center">
            <h3 className= "center">Cargando el detalle del producto</h3>
            <DotSpinner  size={40} speed={0.9} color="black" className= "center"/>
            </div>
        )
    }

    return  (
        <div>
        <button className="title" onClick={() => navigate(-1)} >Volver</button>
        <h3 className="center">Detalle de producto</h3>
         <ItemDetail key= {product.id} {... product}/>
           
        </div>
    )
}

export default ItemDetailContainer 