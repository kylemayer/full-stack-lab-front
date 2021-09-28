import React from 'react';
import PropTypes from 'prop-types';
import Beer from './Beer';

const BeerList = ({ beers }) => {
  <ul aria-label="beer-list">
    {beers.map((beer) => (
      <li key={beer.id}>
        <Beer name={beer.name} style={beer.style} hops={beer.hops} />;
      </li>
    ))}
  </ul>;
};

BeerList.propTypes = {
  beers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      style: PropTypes.string.isRequired,
      hops: PropTypes.string.isRequired,
    })
  ),
};

export default BeerList;
