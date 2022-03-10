// <=======Parte 1=======>

//O fatorial é representado pelo sinal !
//! = 4 x 3 x 2 x 1 = 24

let fatorial = 1;

for(let i = 10; i > 0; i -= 1){
    fatorial *= i;
}
console.log(fatorial);

//OutPut -> 3628800

// <=======Parte 2=======>

let word = 'tryber';
let drow = '';

for(let i = word.length - 1; i >= 0; i -= 1){
    drow += word[i];
}
console.log(word);
console.log(drow);

//OutPut -> tryber | rebyrt

// <=======Parte 3=======>

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array[0];
let menor = array[0];

for(let i = 0; i < array.length; i += 1){
    if(array[i].length > maior.length){
        maior = array[i];
    }
    else if(array[i].length < menor.length){
        menor = array[i];
    }
}

console.log(maior);
console.log(menor);

//OutPut -> javascript | css

// <=======Parte 4=======>

let primo = 0;

for(let i1 = 1; i1 < 50; i1 += 1){
    let count = 0;
    for(let i2 = 1; i2 < 50; i2 += 1){
        if(i1 % i2 === 0){
            count += 1;
    }
    }
    if(count === 2){
        primo = i1;
    }
}

console.log(primo);

//OutPut -> 47