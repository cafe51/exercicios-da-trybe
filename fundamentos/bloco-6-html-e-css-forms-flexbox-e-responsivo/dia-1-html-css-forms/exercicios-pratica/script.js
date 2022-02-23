const botaoEnviar = document.querySelector('#botaoEnviar');

// function interrompeAcao (evt) {
//     evt.preventDefault();
// }
// botaoEnviar.addEventListener('click', interrompeAcao);

const limite = document.querySelectorAll('.limit')

// botaoEnviar.addEventListener('click', interrompeAcao);

function alerta() {
    if (limite[0].value.length < 10 || limite[1].value.length < 10) {
            alert('Dados Inválidos')

    }else alert('Dados enviados com sucesso!')
}

botaoEnviar.addEventListener('click', alerta);
