import React, { useState, useEffect } from 'react';
import BeerList from '../components/beer/BeerList';
import { fetchBeer } from '../services/beerUtils';


const ListContainer = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetchBeer().then((res) => setBeers(res));
  }, []);

  return (
    <>
      <BeerList beers={beers}/>
    </>
  );
};

export default ListContainer;
