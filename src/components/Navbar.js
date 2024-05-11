import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark py-2'>
        <Link to="/" className='navbar-brand ml-5'>React redux contact app</Link>
      
    </nav>
  )
}

export default Navbar