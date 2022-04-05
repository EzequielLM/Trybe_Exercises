const sum = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number'){
        throw new Error('parameters must be numbers');
    }

    return a + b;
}

const myRemove = (arr, item) => {
    const indice = arr.indexOf(item);
    let array = arr;
    array.splice(indice, 1);
    return array;
}

module.exports = {sum, myRemove};