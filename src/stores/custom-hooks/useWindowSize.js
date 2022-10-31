import React, {useState, useEffect} from 'react'

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width:undefined,
        height: undefined
    })
useEffect(()=>{
    const windowSizeHandler =()=>{
        setWindowSize({
            width:window.innerWidth,
            height:window.innerHeight
        })   
    }
windowSizeHandler()
    window.addEventListener('resize', windowSizeHandler)

    return () => window.removeEventListener('resize', windowSizeHandler)

},[])

return windowSize;
  
}

export default useWindowSize