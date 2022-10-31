import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { woman } from '../data';

const womanProductData = woman

const WomanProduct = () => {
    const [womanStyle, setWomanStyle] = useState(womanProductData);


  return (
  <div className='products'>
      <div className="product-subtitle">
     <h3>Woman Fashion</h3>
    <Link to='/'><p>go back</p></Link>
     </div>
    <div className='product-section'>
        {womanStyle.map((item)=>{
           const{id, title, image, price} = item;
           return(
               <div key={id} className="product-cont
               border-gradient border-gradient-purple">
                   <img src={image} className="product-image" />
                   <h6>{title}</h6>
                   <p>Rs.{price}</p>
                   <Link to={`/woman-products/${id}`}> <button className='cart-button'>Shop Now</button></Link>
               </div>
           )
       })}
    </div>
  </div>
  )
}

export default WomanProduct