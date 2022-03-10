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
