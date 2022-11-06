import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import './itemListContainer.css'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { getProducts } from '../../services/firebase/products'
import { db } from '../../services'


const ItemListContainer = ({ }) => {
     const [products, setProducts] = useState([])
     const [loading, setLoading] = useState(true)

     const { categoryId } = useParams()


     useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId 
        ?  query(collection(db, 'products'), where('category', '==', categoryId))
        :  collection(db, 'products')
        getDocs(collectionRef).then(response => {
            console.log(response)
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                console.log(data)

                return {id: doc.id, ...data}
            })
            setProducts(productsAdapted)
           
           
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
     }, [categoryId])

    if(loading) {
        return <h1>Loading...</h1>
    }

     return (
        <div className='contenedorLista1'>
            <h1>LISTADO DE PRODUCTOS</h1>
            <ItemList products={products} />
        </div>
     )    
}

export default ItemListContainer