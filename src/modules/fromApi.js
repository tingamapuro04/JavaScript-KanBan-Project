const url = 'https://api.tvmaze.com/shows?page=10';

const fetchFrom = async () => {
  let moviesArray = [];
  const response = await fetch(url);
  moviesArray = response.json();
  return moviesArray;
};

const fetchFromApi = fetchFrom();

export default fetchFromApi;