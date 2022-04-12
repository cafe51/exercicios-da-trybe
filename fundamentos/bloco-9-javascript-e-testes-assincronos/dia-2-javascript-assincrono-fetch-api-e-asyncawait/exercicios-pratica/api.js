// const fetch = require('node-fetch');

const h2 = document.querySelector("h2")

const apiUrl = `https://api.coincap.io/v2/assets`

const criptos = () => {
    return fetch(apiUrl)
    .then(response => response.json())
    .then( ({ data }) => data.map(({ name, symbol, priceUsd }) => {
        return {
            name: `${name}(${symbol})`,
            value: priceUsd,
        }
    }));
}

function corAleatoria(item) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    item.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

const divStyle = (item) => {
    item.style.width = '300px';
    item.style.height = '200px';
    item.style.textAlign = 'auto';
    item.style.display = 'flex'
    item.style.justifyContent = 'center'
    corAleatoria(item)
}
async function criaDiv(objeto) {
    const {name, value} = objeto
    const div = document.createElement("div")
    h2.appendChild(div)
    const div2 = document.createElement("div")
    div.appendChild(div2)
    divStyle(div)
    div2.style.display = 'flex'
    div2.style.alignItems = 'center'
    div2.innerText = `${name}: ${Math.round(value)}`
}

async function percorreArray (array) {
    array.forEach((element, index) => {
        if (index <= 10) return criaDiv(element);
    })
}

async function criatudo() {
    percorreArray(await criptos())
}

criatudo()
