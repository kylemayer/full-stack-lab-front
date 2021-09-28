export const fetchBeer = async () => {
  const res = await fetch('http://localhost:7890/api/v1/beer');
  const beers = await res.json();

  return beers;
};

