import { useState, useContext } from "react";
import { CartContext } from "../../CartContext/CartContext.js";
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '../../services'
import { useNavigate } from "react-router-dom";
import FormularioCliente from '../Form/Form'
import Swal from "sweetalert2";


const Checkout = () => {
    const [loading, setLoading] = useState(false)

    const [personalData, setPersonalData] = useState(false)
    const [datosCompra, setDatosCompra] = useState({})

    const completoDatos = (name, surname, address, phone, email) => {
        setDatosCompra({ name, surname, address, phone, email })
        setPersonalData(true)
    }

    const { cart, totalQuantity, clearCart } = useContext(CartContext)

    const navigate = useNavigate()

    const createOrder = async () => {
        setLoading(true)
        //Donde guardo los errores
        try {
            const objOrder = {
                buyer: datosCompra,
                items: cart,
                total: totalQuantity
            }
            console.log(objOrder)

            const batch = writeBatch(db)
            const outOfStock = []
 
            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
    
            const { docs } = productsAddedFromFirestore
            docs.forEach(doc => {
                //Con esta función obtengo el stock de los campos
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                //Obtengo la cantidad con el id que el usuario agregó (quantity) al carrito del producto, y lo encuentro en el carrito, trayendome la cantidad con el contador
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
                //Una vez que tengo los valores los comparo, si el valor que tengo en la base de datos es > o = a la cantidad que agrego el usuario, puede vender correctamente.
                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    //Todos los productos que pasen la validación se guardan en batch, los que no, en outofstock
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                clearCart()

                setTimeout(() => {
                    navigate('/')
                }, 2000)
                Swal.fire({
                    title: "Gracias por su compra",
                    text:`El id de su orden es: ${orderAdded.id}`,
                    icon: "success",
                    buttons: true,
                    dangerMode: true,
                
                })
            } else {
                Swal.fire({
                    title: "Algunos productos no se encuentran en stock",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                
                })
            }


        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    if (loading) {
        return <h1>Se esta procesando su pedido...</h1>
    }
    return (
  
        <div>
            {/* Botón para volver hacia la página anterior */}
            <button className="volver" onClick={() => navigate(-1)} >Volver</button>
            <FormularioCliente completoDatos={completoDatos} />
            {personalData
                ? <button onClick={createOrder}>Generar Pedido</button>
                : ""}
        </div>
    )
}

export default Checkout