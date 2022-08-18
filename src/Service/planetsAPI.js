const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

function fetchApiPlanetList() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const keys = Object.keys(data);
      keys.filter((element) => element !== 'residents');
    });
}

export default fetchApiPlanetList;
