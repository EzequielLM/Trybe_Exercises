let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers);

//Parte 1

/* for (let index = 1; index < numbers.length; index += 1) {
    for (let index2 = 0; index2 < index; index2 += 1){
        if(numbers[index] < numbers[index2]){
            let position = numbers[index];
            numbers[index] = numbers[index2];
            numbers[index2] = position;
        }
    }
}

console.log(numbers); */

//Parte 2 

/* for (let index = 1; index < numbers.length; index += 1) {
    for (let index2 = 0; index2 < index; index2 += 1){
        if(numbers[index] > numbers[index2]){
            let position = numbers[index];
            numbers[index] = numbers[index2];
            numbers[index2] = position;
        }
    }
}

console.log(numbers); */

//Parte 3

let mult = [];

for (let i = 0; i < numbers.length; i += 1) {
    if(i < numbers.length - 1){
        mult[i] = numbers[i] * numbers[i + 1];
    }
    else if(i == numbers.length - 1){
        mult[i] = numbers[i] * 2;
    }
}

console.log(mult);