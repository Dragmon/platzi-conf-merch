import React from 'react';
import Product from './Product';
import '../styles/components/Products.css';

const Products = ({ products }) => {
  const listProducts = products.products;
  return(
    <div className='Products'>
      <div className='Products-items'>
        {listProducts.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products;