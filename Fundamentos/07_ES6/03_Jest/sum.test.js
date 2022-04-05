const { sum, myRemove} = require('./sum');

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
})
