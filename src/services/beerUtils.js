export const fetchBeer = async () => {
  const res = await fetch('http://localhost:7890/api/v1/beer');
  const beers = await res.json();

  return beers;
};

export const fetchBeerById = async (id) => {
  const res = await fetch(`http://localhost:7890/api/v1/beer/${id}`);
  const beer = await res.json();

  return beer;
};
