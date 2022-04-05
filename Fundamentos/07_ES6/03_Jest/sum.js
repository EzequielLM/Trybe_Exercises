const sum = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number'){
        throw new Error('parameters must be numbers');
    }

    return a + b;
}

function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
}

  function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
}

function encode(arrEnco) {
    let a = arrEnco.replace(/a/g, '1');
    let e = a.replace(/e/g, '2');
    let i = e.replace(/i/g, '3');
    let o = i.replace(/o/g, '4');
    let u = o.replace(/u/g, '5');
  
    return u;
  }
  
function decode(arrDeco) {
    let arrA = arrDeco.replace(/1/g, 'a');
    let arrE = arrA.replace(/2/g, 'e');
    let arrI = arrE.replace(/3/g, 'i');
    let arrO = arrI.replace(/4/g, 'o');
    let arrU = arrO.replace(/5/g, 'u');
  
    return arrU;
}

module.exports = {sum, myRemove, myFizzBuzz, encode, decode};