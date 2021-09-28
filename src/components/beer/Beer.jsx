import React from 'react';
import PropTypes from 'prop-types';

const Beer = ({ name, style, hops }) => (
  <div aria-label="single-beer">
    <h3>{name}</h3>
    <p>
      {style} | {hops}
    </p>
  </div>
);

Beer.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  hops: PropTypes.string.isRequired,
};

export default Beer;
