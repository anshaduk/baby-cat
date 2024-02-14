import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import ProductCartContext from '../NewContext/CartContext'



const ProductCard = (props) => {
  // const { addToCart } = useContext(ShopContext);
  const {addToCart}=useContext(ProductCartContext)
  const {product}=props;
  const formattedCurrency = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(product.price);

  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-50 cursor-pointer ">
      <div className="flex flex-col h-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Link to={`/product/${product.id}`} >
          <img alt="ecommerce" className="object-cover object-center w-full h-full block hover:scale-110 ease-linear " src={product.image} />
          </Link>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">{product.category}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
          <p className="mt-1">{formattedCurrency}</p>
        </div>
        <div className="mt-auto">
          <button onClick={() => addToCart(product.id)} className="inline-flex text-white bg-yellow-600 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-900 rounded-3xl text-lg">Add to Cart</button>
        </div>
      </div>
    

    </div>
  );
};

export default ProductCard;
