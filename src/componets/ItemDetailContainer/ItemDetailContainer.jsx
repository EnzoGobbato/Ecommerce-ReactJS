import { useState, useEffect } from "react" 
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams, useNavigate } from 'react-router-dom'
import { DotSpinner } from '@uiball/loaders'
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({}) 
    const [cargando, setCargando] = useState(true)
    const { productId } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        const docRef = doc(db, 'productos', productId)

        getDoc(docRef).then(response => {
            console.log(response)
            const data = response.data()
            const productAdapted = { id: response.id, ...data}
            setProduct(productAdapted)
        }). finally (() => {
            setCargando(false)
        })

    }, [productId])

    if (cargando) {
        return (
            <div className="center">
                <h3 className="center">Cargando el detalle del producto</h3>
                <DotSpinner size={40} speed={0.9} color="black" className="center" />
            </div>
        )
    }

    return (
        <div>
            <button className="title" onClick={() => navigate(-1)} >Volver</button>
            <h1 className="center">Detalle de producto</h1>
            <ItemDetail key={product.id} {...product} />
        </div>
    )
}

export default ItemDetailContainer