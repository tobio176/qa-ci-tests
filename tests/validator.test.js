// tests/validator.test.js
const { isValidEmail } = require('../src/validator');

test('Перевірка валідності email', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('not-an-email')).toBe(false);
    expect(isValidEmail(123)).toBe(false);
});
