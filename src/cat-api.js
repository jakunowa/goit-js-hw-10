import axios from 'axios';

let axiosCatApi = null;


export function init(api_key) {
  axiosCatApi = require('axios').default;
  axiosCatApi.defaults.headers.common['live_OE4HOBVHUQhQn99ORnnub6dNF4YjQgY3l3qHLCTHEptPs6kxF2dVbi9X4wWzPlAc'] = api_key;
}


export function fetchBreeds() {
  return axiosCatApi
    .get(`https://api.thecatapi.com/v1/breeds`)
    .then(response => response.data)
    .catch(error => {
      console.error(error);
    });
}

export function fetchCatByBreed(breedId) {
  return axiosCatApi
    .get(`https://api.thecatapi.com/v1/images/${breedId}`)
    .then(response => response.data)
    .catch(error => {
      console.error(error);
    });
}
