// const fetch = require('node-fetch');
// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  return fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => data);
};



window.onload = async () => {
    // console.log(await fetchJoke())
    // fetchJoke();
    const jContainer = document.querySelector('#jokeContainer')

    jContainer.innerHTML = await fetchJoke().then(data => data.joke);
}
