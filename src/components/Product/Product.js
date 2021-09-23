import React from 'react';
import './Product.css';
const Product = (props) => {
  // console.log(props.product);
  const { name, img, seller, star, starCount, features, stock, price } =
    props.product;

  return (
    <div className='product-card'>
      <div className='img-sec'>
        <img src={img} alt='' />
      </div>
      <div>
        <h3 className='product-name'>{name}</h3>
        <div className='product-description'>
          <div>
            <p>
              <small>by: {seller}</small>
            </p>
            <h3>Price: {price}$</h3>
            <span>{star}</span>
            <span>*{starCount}</span>
            <p>
              Only <b style={{ color: 'orange' }}>{stock}</b> left in stock -
              order soon.
            </p>
            <button
              onClick={() => props.clickHandler(props.product)}
              className='regular-btn'
            >
              add to cart
            </button>
          </div>
          <div className='des-right'>
            <h5>
              <u>Description</u>:
            </h5>
            {features?.map((details) => (
              <ProductDetails details={details} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
function ProductDetails(props) {
  // console.log(props.details);
  const { details } = props;
  console.log(details);
  // const { description, value } = props.details;
  // console.log(description);
  return (
    <p>
      <small>{details.description ? details.description : 'Not Found'}</small>
    </p>
  );
}
export default Product;
