import React from 'react'
import all_product from "../../Component/Assets/all_product";
import ProductCard from '../ProductCard/ProductCard'

const Popular = () => {
  return (
    <div className="flex flex-wrap -m-4">
    {all_product.map((product)=>(
      (<ProductCard key={product.id} product={product}/>)
    ))}
    </div>
  )
}

export default Popular