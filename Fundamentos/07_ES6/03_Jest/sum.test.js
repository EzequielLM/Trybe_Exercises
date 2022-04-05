describe('Função sum', () => {

const sum = require('./sum');

test('Soma 4 e 5 = 9', () => {
    expect(sum(4, 5)).toBe(9);
})

test('Soma 0 e 0 = 0', () => {
    expect(sum(0, 0)).toBe(0);
})

//test('Retorna erro quando há string', () => {
//    expect(sum(4, "5")).toBe(Error);
//})
});