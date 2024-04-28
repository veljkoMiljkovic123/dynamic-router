import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ProductsService from '../services/ProductsService';

function SinglePage() {
  let {id} = useParams()
 
  useEffect(()=>{
    ProductsService.getSingleProduct(id)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  },[])


  return (
    <div>SinglePage</div>
  )
}

export default SinglePage