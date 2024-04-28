import React, { useEffect, useState } from 'react'
import ProductsService from '../services/ProductsService'
import ProductCard from '../components/ProductCard'

function ProductsPage() {

    const [allData,setAllData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        ProductsService.getAllProducts()
        .then(res=>{
            setAllData(res.data.products)
            setIsLoading(true)
        })
        .catch(err=>console.log(err))
    },[])

  return (
    <div className='container mx-auto '>
        {isLoading?<div className='flex flex-wrap gap-5 '>{allData.map((product,i)=>{
         return <ProductCard key={i} product={product} id={product.id}/>
        })}</div>:<h2>Loading...</h2>}
    </div>
  )
}

export default ProductsPage