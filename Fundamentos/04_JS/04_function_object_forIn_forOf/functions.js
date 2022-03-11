//! Criar uma função que receba uma string e retorne
//! true se for um palíndromo e false se não for 

function verificaPalindromo(word){
    let drow = word.split('').reverse().join(''); //? separa a string, depois inverte e reune denovo em uma nova string

    if(word === drow){
        return true;
    }
    else{
        return false;
    }
};

console.log(verificaPalindromo('arara'));
console.log(verificaPalindromo('desenvolvimento'));

//! Criar uma função que reeceba um array de inteiros
//! e retorne o índice do maior valor

function indiceMaiorValor(array){
    
    let count = 0;

    for(let i = 0; i < array.length; i += 1){
        if(array[i] > array[count]){ //? Usar o array[count]
            count = i;
        }
    }

    return count;
}

let arrayMaior = [2, 3, 6, 7, 10, 1];

console.log(indiceMaiorValor(arrayMaior));

//! Criar uma função que reeceba um array de inteiros
//! e retorne o índice do menor valor

function indiceMaiorValor(array){
    
    let count = 0;

    for(let i = 0; i < array.length; i += 1){
        if(array[i] < array[count]){
            count = i;
        }
    }

    return count;
}

let arrayMenor = [2, 4, 6, 7, 10, 0, -3];

console.log(indiceMaiorValor(arrayMenor));
