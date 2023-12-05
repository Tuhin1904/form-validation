import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='bg-blue-600 mb-6 text-white h-11 text-4xl flex justify-around px-10'>
        
            <Link to="/">
                Home
            </Link>
            <Link to="/contact">
            Contact Us
            </Link>
      
    </nav>
  )
}

export default Navbar