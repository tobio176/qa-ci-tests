// src/api.js
const axios = require('axios');

async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
}

async function fetchTodoById(id) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return response.data;
}

module.exports = { fetchPosts, fetchTodoById };
