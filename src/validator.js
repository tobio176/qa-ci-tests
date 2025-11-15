// src/validator.js
function isValidEmail(email) {
    if (typeof email !== 'string') return false;
    return email.includes('@');
}

module.exports = { isValidEmail };
