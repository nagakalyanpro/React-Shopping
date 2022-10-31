import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { woman } from '../data';

const womanData = woman

const WomanFashion = () => {
    const [womanStyle, setWomanStyle] = useState(woman);

 


  return (
   <div className='item-section'>
    <h3>Woman Fashion</h3>
   <Link to="/woman">
   <div className='woman-section'>
        {womanStyle.map((item)=>{
            const {id, title, image} = item;
            return(
                <div key={id} className='woman-modal'>
                    <img src={image} className="woman-image" />
                    <h6>{title}</h6>
                </div>
            )
        })}
    </div>
   </Link>
   </div>
  )
}

export default WomanFashion;