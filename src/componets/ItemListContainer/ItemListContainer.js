import { useParams } from 'react-router-dom'
import { DotSpinner } from '@uiball/loaders'
import ItemList from "../ItemList/ItemList"
import "./itemListContainer.css"
import { getProducts } from "../../services/firebase/products"
import useAsync from "../Hooks/useAsync"

const ItemListContainer = () => {
    const { categoryId } = useParams()
    const getProductsWithCategory = () => getProducts(categoryId)

    const { data: products, error, loading } = useAsync(getProductsWithCategory, [categoryId])


    if (loading) {
        return (
            <div className='center'>
                <h1>Cargando...</h1>
                <DotSpinner size={40} speed={0.9} color="black" className="center" />
            </div>
        )
    }

    if(error){
        return <h1>Upps! Hubo un error.</h1>
    }

     return (
        <div className='contenedorLista1'>
            <h1>Listado de Productos</h1>
            <ItemList products={products} />
        </div>
     )    
}

export default ItemListContainer