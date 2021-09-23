import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
  return (
    <div className='header-style'>
      <img src={logo} alt='' />
      <nav>
        <ul className='items'>
          <li className='item'>
            <a href='#shop'>Shop</a>
          </li>
          <li className='item'>
            <a href='#order-review'>Order Review</a>
          </li>
          <li className='item'>
            <a href='#manage-inventory'>Manage Inventory</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
<h1>header</h1>;
