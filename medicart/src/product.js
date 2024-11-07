import React from 'react';
import NavBar from './navbar';
import './product.css';

const products = [
    {
      id: 1,
      name: 'Product Name 1',
      description: 'Short product description goes here.',
      price: '$19.99',
      imageUrl: 'https://via.placeholder.com/250'
    },
    {
      id: 2,
      name: 'Product Name 2',
      description: 'Short product description goes here.',
      price: '$24.99',
      imageUrl: 'https://via.placeholder.com/250'
    },
]

const Product=()=>{
    return(
       <div>
         <NavBar/>
        <div className='product-list '>
            
            {products.map((product)=>(
                <div key={product.id} className='product-card'>
                    <img src={product.id} alt={product.name}></img>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <div className='product-price'><p>{product.price}</p></div>
                    <button className='add-to-cart'>Add to Cart</button>
                </div>

           ) )}

            
            </div></div>
    );
}

export default Product;
