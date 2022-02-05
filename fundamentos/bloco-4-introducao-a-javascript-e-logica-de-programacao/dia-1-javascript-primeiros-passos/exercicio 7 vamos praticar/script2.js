let apeça = 'radiNhA';
let apeça1 = apeça.toLowerCase()

let apeão = 'peão';
let atorre = 'torre';
let acavalo = 'cavalo';
let abispo = 'bispo';
let arei = 'rei';
let arainha = 'rainha';

let mpeão = 'O peão anda uma casa pra frente ou duas se no início do jogo';
let mtorre = 'A torre casas na vertical';
let mcavalo = 'O cavalo anda em L';
let mbispo = 'O bispo anda as casas na diagonal';
let mrei = 'O rei anda uma casa para qualquer direção';
let mrainha = 'A rainha anda casas em todas direções';


let xadrez = [apeão, atorre, acavalo, abispo, arei, arainha];
let contador = []
for (let i = 0; i < xadrez.length; i += 1){
    if (apeça1 === xadrez[i]){
        if (xadrez[i] === apeão){
            console.log(mpeão)
        }else if (xadrez[i] === atorre){
            console.log(mtorre)
        }else if (xadrez[i] === acavalo){
            console.log(mcavalo)
        }else if (xadrez[i] === abispo){
            console.log(mbispo)
        }else if (xadrez[i] === arei){
            console.log(mrei)
        }else if (xadrez[i] === arainha){
            console.log(mrainha)
        }
    }else contador.push(1)    
}
if (contador.length == 6){
    console.log(apeça + ' não é uma peça de xadrez')
}
