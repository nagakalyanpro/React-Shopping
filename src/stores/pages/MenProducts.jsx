import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { mens } from '../data';


const menProductData = mens

const MenProducts= () => {
    const [menWear, setMenWear] = useState(menProductData)


  return (
   <div className='products'>
     <div className="product-subtitle">
     <h3>Men Fashion</h3>
    <Link to='/'><p>go back</p></Link>
     </div>
    <div className='product-section'>
        {menWear.map((item)=>{
            const{id, title, image, price, shoptitle} = item;
            return(
               <div>
                 <div key={id} className="product-cont 
                border-gradient border-gradient-purple">
                    <h4>{title}</h4>
                    <img src={image} className="product-image " />
                    <p>Rs.{price}</p>
                   <Link to={`/men-products/${id}`}> <button className='cart-button'>Shop Now</button></Link>
                </div>
               </div>
            )
        })}
    </div>
   </div>
  )
}

export default MenProducts;