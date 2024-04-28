import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='container mx-auto flex h-[120px] items-center justify-between'>
        <h2>logo</h2>
        <ul className='flex gap-5'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/products'>Products</NavLink>
        </ul>
    </div>
  )
}

export default Navbar