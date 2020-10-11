import React from 'react';
import { Container } from './Product.Style';
import PropTypes from 'prop-types';

const ProductDetails = ({
  item: {
    id,
    name,
    description,
    colors,
    size,
    oldPrice,
    newPrice,
    firstImageUrl,
    secondImageUrl,
    thirdImageUrl,
    fourthImageUrl,
    rate,
    orders
  }
}) => {
  return (
    <Container style={{ backgroundColor: 'red' }}>
      <div style={{ backgroundColor: 'black', width: '100%', height: '100%' }} />
    </Container>
  );
};

ProductDetails.propTypes = {};

export default ProductDetails;