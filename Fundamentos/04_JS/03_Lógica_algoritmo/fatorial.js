// <=======Parte 1=======>

//O fatorial é representado pelo sinal !
//! = 4 x 3 x 2 x 1 = 24

let fatorial = 1;

for(let i = 10; i > 0; i -= 1){
    fatorial *= i;
}
console.log(fatorial);

// <=======Parte 2=======>

let word = 'tryber';
let drow = '';

for(i = word.length - 1; i >= 0; i -= 1){
    drow += word[i];
}
console.log(word);
console.log(drow);
