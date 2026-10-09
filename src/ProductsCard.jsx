import React from 'react'

const ProductsCard = ({product, del }) => {
  return (
    <div className="p-2 border-2 rounded flex flex-col gap-4">
        <div className="w-50">
            <img 
            src= {product.image} 
            alt=""
             />
        </div>
        <div>
            <h2 className="font-semibold">{product.title.substring(0, 10)}</h2>
            <p className="text-xs">{product.category}</p>
            <p className="text-green-600">{product.price}</p>
        </div>
        <button onClick={() => del(product.id)} className="p bg-red-500 rounded border-2">Delete</button>
    </div>
  )
}

export default ProductsCard
