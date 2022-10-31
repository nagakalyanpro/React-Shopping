import React from 'react'
import MenFashion from '../components/MenFashion'

import Trending from '../components/Trending'
import WomanFashion from '../components/WomanFashion'

const HomePage = () => {
  return (
    <div>
    
        <Trending />
        <MenFashion />
        <WomanFashion />

        <a href="https://www.google.com/search?q=google+fonts&oq=&aqs=chrome.0.35i39i362l8.30630217j0j7&sourceid=chrome&ie=UTF-8">Click me</a>
    </div>
  )
}

export default HomePage