// tests/math.test.js
const { add, multiply, subtract } = require('../src/math');

test('Додавання чисел', () => {
    expect(add(2, 3)).toBe(5); // Очікуємо 2 + 3 = 5
    expect(add(-1, 1)).toBe(0); // Очікуємо -1 + 1 = 0
});

test('Віднімання чисел', () => {
    expect(subtract(10, 5)).toBe(5);
});

test('Множення чисел', () => {
    expect(multiply(3, 3)).toBe(9);
});
