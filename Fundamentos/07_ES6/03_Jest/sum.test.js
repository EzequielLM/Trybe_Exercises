const { sum, myRemove, myFizzBuzz} = require('./sum');

describe('Função sum', () => {

//Teste se o retorno de sum(4, 5) é 9
test('Soma 4 e 5 = 9', () => {
    expect(sum(4, 5)).toBe(9);
})

//Teste se o retorno de sum(0, 0) é 0
test('Soma 0 e 0 = 0', () => {
    expect(sum(0, 0)).toBe(0);
})

//Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
test('Retorna erro quando há string', () => {
    expect(() => sum(4, "5")).toThrowError();
})

//Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
test('A string do erro deve ser parameters must be numbers', () => {
    expect(() => sum(4, "5")).toThrowError('parameters must be numbers');
})
});

describe('Função myRemove', () => {

//Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
test('Retorna o array[1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
})

//Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
test('Não retorna o array[1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
})

//Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
test('Retorna o array[1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
})

});

describe('Função myFizzBuzz', () => {

//Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
test('Retorna fizzbuzz para o valor 15', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
});

//Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
test('Retorna fizz para o valor 9', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
});

//Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
test('Retorna buzz para o valor 10', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
});

//Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
test('Retorna 11 para o valor 11', () => {
    expect(myFizzBuzz(11)).toBe(11);
});

//Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
test('Retorna false para o valor Olá', () => {
    expect(myFizzBuzz('Olá')).toBe(false);
});
});
