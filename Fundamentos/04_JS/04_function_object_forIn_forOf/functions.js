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
}

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

function indiceMenorValor(array){

    let count = 0;

    for(let i = 0; i < array.length; i += 1){
        if(array[i] < array[count]){
            count = i;
        }
    }

    return count;
}

let arrayMenor = [2, 4, 6, 7, 10, 0, -3];

console.log(indiceMenorValor(arrayMenor));

//! Criar uma função que reeceba um array de nomes
//! e retorne o que tiver mais caracteres 

function maisCaracteres(array){

    let maiorNome = '';

    for(let i = 0; i < array.length; i += 1){
        if(array[i].length > maiorNome.length){
            maiorNome = array[i];
        }
    }


    return maiorNome;
}

let arrayNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(maisCaracteres(arrayNomes));

//! Criar uma função que reeceba um array de inteiros
//! e retorne o inteiro que mais se repete

function maisVezes(array){
    let maisVezes;
    let index = 0;

    for(let i = 0; i < array.length; i += 1){
        let count = 0;
        let count2 = 0;

        for(let j = 0; j < array.length; j += 1){
            count2 = count;
            if(array[i] === array[j]){
                count += 1;
            }
            
            if(count > count2){
                index = array[i];
            }
            else{
                index = array[j];
            }
        }
    }
    maisVezes = index;
    return maisVezes;
}

let arrayMaisVezes = [2, 3, 2, 5, 8, 2, 3];

console.log(maisVezes(arrayMaisVezes));


//! GABARITO

/* function maisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    for (let index in numeros) {
      let verificaNumero = numeros[index];
      for (let index2 in numeros) {
        if (verificaNumero === numeros[index2]) {
          contNumero += 1;
        }
      }
      if (contNumero > contRepetido) {
        contRepetido = contNumero;
        indexNumeroRepetido = index;
      }
      contNumero = 0;
    }
    return numeros[indexNumeroRepetido];
  }
 */