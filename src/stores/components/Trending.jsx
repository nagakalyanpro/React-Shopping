import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { trending } from '../data';

const trendingData = trending;


const Trending = () => {
    const [trendData, setTrendData] = useState(trendingData);


  return (
    <div className='trending-section'>
   
    <div className='hero-section'>
        {trendData.map((item)=>{
            const{id, title, image, category} = item;
            return(
               <div key={id}>
                 <div className='hero-modals'>
                  <div className="hero-title">
                  <h4> {title}</h4>
                  <Link to={`/${category}`}> <button>Find More</button></Link>
                  </div>
                    <img className='hero-img' src={image} alt="" />
                </div>
               </div>
            )
        })}
    </div>
  </div>
  )
}

export default Trending