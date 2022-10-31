import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';


const Navbar = () => {
  const {cartItems} = useSelector((state)=>state)
  const cartProducts = cartItems.cart.length
  return (
    <div className='nav-section'>
        <div className="log">
           <Link to="/"  style={{textDecoration:"none", color:"aliceblue"}}> <h2>Shopping Mall</h2></Link>
        </div>
        <div className="search">
            <input type="text" placeholder='Search...' />
        </div>
        <div className="user">
            <h3>User:</h3>
           <Link to='/cart'> <h3>
          <FaShoppingCart className='icon' />
            <sup>{cartProducts}</sup></h3></Link>
        </div>
    </div>
  )
}

export default Navbar