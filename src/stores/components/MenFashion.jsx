import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { mens } from '../data';


const menData = mens



const MenFashion = () => {
    const [menWear, setMenWear] = useState(mens)


  return (
  <div className='item-section'>
         <h3 className='item-name'>Men Fashion</h3>
   <Link to="/men">
   <div className='men-section'>
        {menWear.map((item)=>{
            const{id, title, image} = item;
            return(
                <div key={id} className="men-cont">
                    <img src={image} className="men-image" />
                    <h6>{title}</h6>
                </div>
            )
        })}
    </div>
   </Link>
  </div>
  )
}

export default MenFashion