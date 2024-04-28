import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({product,id}) {
  return (
    <div className='w-[300px] h-[300px] border-2 border-blue-400'>
        <img className='h-[150px] w-full object-cover' src={product.thumbnail}/>
        <h3 className='text-2xl text-blue-400 text-center mb-2'>{product.title}</h3>
        <p className='text-2xl text-blue-400 text-center mb-2'>${product.price}</p>
        <Link to={`/singleProduct/${id}`}>Show more</Link>
    </div>
  )
}

export default ProductCard