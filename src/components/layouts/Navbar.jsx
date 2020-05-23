import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ Container }) => {
  return (
    <div className='Navbar'>
      <Container>
        <h3>
          <img
            className='logo'
            src='https://cdn.shopify.com/assets/images/logos/shopify-bag.png'
            alt='logo'
          />
          React Store
        </h3>

        <ul>
          <li>Home</li>
          <li>Categories</li>
          <li>Account</li>
          <li>Support</li>
          <li>Search</li>
          <li>Login/Register</li>
          <li>Cart</li>
        </ul>
      </Container>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;