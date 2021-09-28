export const fetchBeer = async () => {
  const res = await fetch('http://localhost:7890/api/v1/beers');
  const beers = await res.json();

  return beers;
};

export const fetchBeerById = async (id) => {
  const res = await fetch(`http://localhost:7890/api/v1/beers/${id}`);
  const beer = await res.json();

  return beer;
};
