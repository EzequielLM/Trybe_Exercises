let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/* let sumNumbers = 0; */
//Parte 1

/* for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
} */

//Parte 2

/* for (let i = 0; i < numbers.length; i += 1) {
    sumNumbers += numbers[i];
} */

/* console.log(sumNumbers); */


//Parte 3

/* let media = sumNumbers / numbers.length;

console.log(media); */

//Parte 4

/* if(media > 20) {
    console.log('Valor maior que 20');
}
else {
    console.log('Valor menor que 20');
} */

//Parte 5

/* let maior = 0;

for(let i = 0; i < numbers.length; i += 1) {
    if(numbers[i] > maior){
        maior = numbers[i];
    }
}

console.log(maior);
 */

//Parte 6

let odd = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 !== 0) {
        odd += 1;
    }
}

if (odd === 0){
    console.log('nenhum valor ímpar encontrado');
}
else{
    console.log(odd);
}