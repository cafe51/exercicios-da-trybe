const aside = document.querySelector('#aside');
// const aside = document.querySelectorAll('aside');

const botaoCapitulos = document.querySelector('#caps');
const texto = document.querySelector('article');


const escondeAside = () => {
    if (aside.style.display !== 'inherit') {
        aside.style.display = 'inherit';
        aside.style.padding = '10px';
        aside.style.paddingRight = '50px';
            // texto.style.display = 'none'
    } else if (aside.style.display !== 'none') {
        aside.style.display = 'none';
        aside.style.padding = '0px';
        aside.style.paddingRight = '0px';
        // texto.style.display = '';
            }
}



botaoCapitulos.addEventListener('click', escondeAside);