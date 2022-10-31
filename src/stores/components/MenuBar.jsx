import React, {useState, useEffect} from 'react'
import { useRef } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaRegUser} from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Sidebar from './Sidebar';


const MenuBar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const {cartItems} = useSelector((state)=>state)
  const cartProducts = cartItems.cart.length
const menuHandler=()=>{
  setShowMenu(!showMenu);
}
let menuRef = useRef()
useEffect(()=>{

  const handler =(e)=>{
   if(!menuRef.current.contains(e.target)){
    setShowMenu(true)
   }
  }

  document.addEventListener('mousedown', handler)


return()=>{
  document.removeEventListener('mousedown', handler)
  
}
},[])

  return (
    <div className='menu-section' ref={menuRef}>
        <div className="menu-list">
        <AiOutlineMenu className='menu-icon' style={{color:'red'}}
        onClick={menuHandler}
        />
            <h2>Shopping Mall</h2>
        </div>
        <div className="menu-user">
       <FaRegUser />
      <div className='menu-cart'>
      <FaShoppingCart className='icon' />
       <sup> {cartProducts}</sup>
      </div>
        </div>
      <div>
    {!showMenu? <Sidebar /> : ""}
      </div>
    </div>
  )
}

export default MenuBar