import React from "react";
import { useState, useEffect, createContext } from "react";

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0
})

  export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [total, setTotal] = useState(0) 

  useEffect(() => {
    const totalQty = getQuantity()
    setTotalQuantity(totalQty)
}, [cart])

useEffect(() => {
  const total = getTotal()
  setTotal(total)
}, [cart])

const addItem = (productToAdd, quantity) => {
  //Función para saber si el producto está en el carrito
  if (!isInCart(productToAdd.id)) {
      setCart([...cart, productToAdd])
  } else {
      const cartUpdated = cart.map(prod => {
          if(prod.id === productToAdd.id) {
              const productUpdated = {
                  ...prod,
                  quantity: productToAdd.quantity
              }

              return productUpdated
          } else {
              return prod
          }
      })

      setCart(cartUpdated)
  }
}

const isInCart = (id) => { return cart.find(prod => prod.id === id) ? true : false}

const removeItem =(id)=>{
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

const getTotal = () => {
  let accu = 0
  cart.forEach(prod =>{
      accu += prod.quantity * prod.price
  })
  return accu
}

const clearCart = () => {
  setCart([])
}

const getProductQuantity = (id) => {
  const product = cart.find(prod => prod.id === id)
  return product?.quantity
}

return (
  <CartContext.Provider value = {{cart, addItem, removeItem, isInCart, clearCart, totalQuantity,  getQuantity,  total, getProductQuantity}}>
  {children}
  </CartContext.Provider>
)

}
