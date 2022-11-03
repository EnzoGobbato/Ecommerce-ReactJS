import React from 'react';
import './App.css';
import Navbar from './componets/NavBar/NavBar.jsx';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './componets/Cart/Cart.js';
import {CartProvider} from './CartContext/CartContext';
import { NotificationProvider } from './componets/Services/NotificationService/NotificationService'
import Checkout from './componets/Checkout/Checkout'

function App() {
  return (
    <div>
     <NotificationProvider>
        <CartProvider>
          <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path= '/' element= {<ItemListContainer />} />
            <Route path='/category/:categoryId'element={<ItemListContainer />}/>
            <Route path= '/detail/:productId' element= {<ItemDetailContainer />}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
            <Route path= '/Cart' element={<Cart />} />
            <Route path='./componets/Checkout/Checkout' element={<Checkout />} />
          </Routes>
          </BrowserRouter>
        </CartProvider>
     </NotificationProvider>
  </div>
  );
}

export default App;