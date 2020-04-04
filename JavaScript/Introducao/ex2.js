// Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
// function pares(x, y) {
//  // código aqui
// }
// pares(32, 321);

function exibePares(x, y){
    if(x > y){
        let aux = x;
        x = y;
        y = aux;
    }

    for(i = x; i < y; i++){
        if(i % 2 === 0){
            console.log(i);
        }
    }
}

exibePares(32,321);
