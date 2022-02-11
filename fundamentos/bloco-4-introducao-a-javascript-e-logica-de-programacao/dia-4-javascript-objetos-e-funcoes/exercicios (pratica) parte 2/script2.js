function verificadorDeStrings(word, ending){
    let resposta = 0
    for (yndex = 0; yndex < ending.length;  yndex += 1){
        if (ending[(ending.length -1) - yndex] === word[(word.length -1) - yndex]){
            resposta = true
        }else resposta = false
    }
    return resposta    
}

console.log(verificadorDeStrings('joaofernando', 'fernan'))
