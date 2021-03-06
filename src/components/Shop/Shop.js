import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('./products.JSON')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const clickHandler = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className='shop-container'>
      <div className='product-container'>
        {products?.map((product) => (
          <Product
            key={product.key}
            clickHandler={clickHandler}
            product={product}
          />
        ))}
      </div>
      <div className='cart-container'>
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
