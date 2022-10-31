import React, {useEffect} from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from './stores/pages/HomePage'
import MenProducts from './stores/pages/MenProducts';
import WomanProduct from './stores/pages/WomanProduct';
import SingleProduct from './stores/pages/SingleProduct';
import WomanSingle from './stores/pages/WomanSingle';
import { cartTotals } from './stores/redux/products/productSlice';
import CartPage from './stores/pages/CartPage';
import { useDispatch, useSelector } from 'react-redux';
import useWindowSize from './stores/custom-hooks/useWindowSize';

import './App.css'
import Navbar from './stores/components/Navbar';
import MenuBar from './stores/components/MenuBar';
import Sidebar from './stores/components/Sidebar';


const App = () => {
  
const cart = useSelector((state)=>state.cartItems)
const dispatch = useDispatch();
const {width} = useWindowSize();

useEffect(()=>{
dispatch(cartTotals())
},[cart])



  return (
    <div>
      {width < 768? <MenuBar /> : <Navbar />}
    
        <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/men' element={<MenProducts />} />
        <Route path="/men-products/:id" element={<SingleProduct />} />
        <Route path="/woman-products/:id" element={<WomanSingle />} />
        <Route path='/woman' element={<WomanProduct />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </div>
  )
}

export default App