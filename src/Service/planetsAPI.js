const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchApiPlanetList() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    // console.log(data.results);
    return data.results;
  } catch (error) {
    console.log(error);
  }
}

export default fetchApiPlanetList;

/* {
  const keys = Object.keys(data);
  keys.filter((element) => element !== 'residents');
  console.log('keys', keys);
}); */
