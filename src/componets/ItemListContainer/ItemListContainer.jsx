import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList.jsx'
import './itemListContainer.css'
import { DotSpinner } from '@uiball/loaders'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from "../Services/Firebase/index.js"

const ItemListContainer = () => {
     const [products, setProducts] = useState([])
     const [loading, setLoading] = useState(true)
     const { categoryId } = useParams()

     useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
        ? query(collection(db, 'productos'), where ('category', '==', categoryId))
        : collection(db, 'productos')
        getDocs(collectionRef).then(response => {
            console.log(response)

        const productsAdapted = response.docs.map(doc => {
            const data = doc.data()
                console.log(data)
            return {id: doc.id, ...data}
        })
            console.log(productsAdapted)
        setProducts(productsAdapted)

        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId])

    if(loading) {
        return (
        <div className="center">
            <h1>Loading</h1>
            <DotSpinner size={50} speed={0.6} color="black" className="center" />
        </div>)
    }

     return (
        <div className='contenedorLista1'>
            <h1>Listado de Productos</h1>
            <ItemList products={products}/>
        </div>
     )    
}

export default ItemListContainer