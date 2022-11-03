import React from "react";
import { useState, useEffect, useContext, createContext } from "react";

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0
})
    

  export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0)

 useEffect(() => {
        const totalQty = getQuantity()
        setTotalQuantity(totalQty)
    }, [cart])

// agregar un producto al carrito

  const addItem = (productToAdd) => {
    //Funión para saber si el producto está en el carrito
    if (!isInCart(productToAdd.id)) {
        setCart([...cart, productToAdd])
    } else {
        console.log('Ya esta en el carrito')
    }
}
    const isInCart = (id) => {
      return cart.some(prod => prod.id === id)
}

 //Funcion para remover/filtrar
 
 const removeItem = (id) => {
  const cartWithoutProduct = cart.filter(prod => prod.id !== id)
  setCart(cartWithoutProduct)
}
const getQuantity = () => {
  let accu = 0
  cart.forEach(prod => {
      accu += prod.quantity
  })
  return accu
}

//Función para obtener el total de los productos en el carrito 
const getTotal = () => {
  let accu = 0
  cart.forEach(prod => {
      accu += prod.quantity * prod.price
  })
  return accu
}

const clearCart = () => {
  setCart([])
}

return (
  <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity, isInCart, getTotal, clearCart }}>
      {children}
  </CartContext.Provider>
)
}