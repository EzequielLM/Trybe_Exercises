//Parte 1

/* const a = 5;
const b = 10;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b); */

//Parte 2

/* const num1 = 10;
const num2 = 30;

if (num1 > num2) {
    console.log(num1);
}
else if (num1 == num2) {
    console.log("São iguais");
}
else {
    console.log(num2);
}
 */

//Parte 3

/* const num1 = 10;
const num2 = 20;
const num3 = 30;

if (num1 > num2 && num1 > num3) {
    console.log(num1);
}
else if (num2 > num1 && num2 > num3) {
    console.log(num2);
}
else if (num3 > num1 && num3 > num2) {
    console.log(num3);
}
 */

//Parte 4

/* const valor = 10;

if (valor > 0) {
    console.log("Positive");
}
else if (valor == 0){
    console.log("Zero");
}
else {
    console.log("Negative");
} */

//Parte 5

/* const ang1 = 60;
const ang2 = 60;
const ang3 = 60;

let soma = ang1 + ang2 + ang3;

if (ang1 > 0){
    if (ang2 > 0){
        if (ang3 > 0){
            if (soma == 180){
                console.log(true);
            }
            else{
                console.log(false);
            }
        }
        else {
            console.log("Angulo 3 valor negativo");
        }
    }
    else{
        console.log("Angulo 2 valor negativo");
    }

}
else{
    console.log("Angulo 1 valor negativo");
} */

//Parte 6

let peca = 'Tower';

if (peca === 'King'){
    console.log('All directions, but just one square');
}
else if (peca === 'Queen'){
    console.log('Vertical, horizontal and diagonals');
}
else if (peca === 'Bishop') {
    console.log('Diagonals');
}
else if (peca === 'Horse') {
    console.log('In L');
}
else if (peca === 'Tower') {
    console.log('Vertical and Horizontal');
}
else if (peca === 'Pawn') {
    console.log('One square foward and two squares in the first move');
}
else {
    console.log('Error, chess piece not found!');
}
