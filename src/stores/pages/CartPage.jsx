import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, clearItems, cartTotals } from '../redux/products/productSlice'

const CartPage = () => {
    const {cartItems}= useSelector((state)=>state)
    const dispatch = useDispatch()
  const cartTotal = cartItems.total

    let cartProduct = cartItems.cart
    if(cartProduct.length ==0){
      return(
       <div className='cart-empty'>
         <h3>Your cart is empty</h3>
         <Link to="/">Go back to Shopping</Link>
       </div>
      )
    }
  return (
  <>
   <div className='cart-page'>
      
      <div className="cart-subpage">
        <div className="go-back">
      <Link to="/">go back</Link>
        </div>
      {cartProduct.map((item)=>{
         const{id,shoptitle, image, price, amount} = item
         return(
           <div key={id}>
               <div className="cart-section">
        
               <div className="cart-image">
                 <img src={image} alt="" />
                 </div >
               <div className="cart-desc">
                <h3> {shoptitle}</h3>
                 <h4>Rs. {price}</h4>
               <button
               onClick={()=>dispatch(removeItem(id))}
               >Remove Item</button>       
               </div>
               </div>
              
           </div>
         )
       })}
      </div>
     <div className='cart-dispatch'>
     <h3>Cart Total: <br /> Rs. {cartTotal}.00</h3>
     <p>The price and availability of items are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price.
   
   Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.</p>
    <div className="check-out">
    <button className='cart-clear red'
     onClick={()=>dispatch(clearItems())}
     >Clear Cart</button>
     <button className='cart-clear green'>Check Out</button>
    </div>
     </div>
     <Link to='/' className='get-back'><p>go back</p></Link>
      </div>
  </>
  )
}

export default CartPage