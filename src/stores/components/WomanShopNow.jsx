import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { woman } from '../data';
import { addToCart } from '../redux/products/productSlice';



const MenShopNow = () => {
  let products = woman
  const dispatch = useDispatch()
 const {id}= useParams();
 const navigate = useNavigate()

 const item = products.find((item)=>item.id === id)
 const {title, image, price, shoptitle,amount} = item;


  return (
   <div className='single-section'>

     <div className='single-product'>
       
        <img src={image} alt="" className='single-image'/>
      </div>
           <div className="single-desc">
           <h2>{shoptitle}</h2>
           
        <h4 className='single-price'>Price: <span> Rs.{price}</span></h4>
           <div className='single-list'>
               <ul>
                   <li className='listed'>Care Instructions: Machine Wash</li>
                   <li className='listed'>Fit Type: Slim</li>
                   <li className='listed'>Stylish & In-vogue Washed Grey Jeans; Cotton Lycra Fabric with Stretch (98% Cotton 2% Elastane) - To give you extra comfort and agility</li>
                   <li className='listed'>Slim Fit; Mid-Rise; Regular Length; Zip Fly with Buttoned Closure; 2 Front & 2 Back Pockets; Front Diagonal Pockets</li>
                   <li className='listed'>Perfect for Casual, Party & Office Wear</li>
                   <li className='listed'>Wash Care - Mild Wash ; Wash dark colors separately; Disclaimer - There may be slight variation in shade and colour due to photographic effects and monitor settings</li>
                   <li className='listed'>Age Range Description: Adult</li>
               </ul>
           </div>
       </div>
       <div className="add-cart">
        <div className="free-del">
       <b> FREE delivery</b>, within a week. <Link>Details</Link>
        </div>
        <div className="in-stock">
          <h3>In Stock</h3>
        </div>
        <div className="quantity">
          <p>Quantity  : </p>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <Link to="/cart"><button 
        onClick={()=>dispatch(addToCart(item))}
        className='add-to-cart'>Add To Cart</button></Link>
       </div>
   </div>
  )
}

export default MenShopNow