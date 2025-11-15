// tests/currency.test.js
const { parseCurrency, formatCurrency, addCurrencies, calculateTotalWithTax } = require('../src/currency');

test('Перетворення валюти у число', () => {
    expect(parseCurrency('$50')).toBe(50);
    expect(parseCurrency('$30.25')).toBe(30.25);
});

test('Форматування числа у валюту', () => {
    expect(formatCurrency(50)).toBe('$50.00');
    expect(formatCurrency(30.25)).toBe('$30.25');
});

test('Складання двох значень валюти', () => {
    expect(addCurrencies('$50', '$30')).toBe('$80.00');
    expect(addCurrencies('$20.75', '$9.25')).toBe('$30.00');
});

test('Розрахунок загальної вартості з податком (20%)', () => {
    expect(calculateTotalWithTax('$100', 0.20)).toBe('$120.00');
});
