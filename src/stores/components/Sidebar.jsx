import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
        <div className="sidebar-section">
            <ul>
                <Link to='/'>
                <li>Home</li>
                </Link>
                <Link to='/men'>
                <li>Men's</li>
                </Link>
                <Link to='/woman'>
                <li>Woman</li>
                </Link>
                <Link to={'/cart'}>
                <li>Cart</li>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar