// tests/api.test.js
const { fetchPosts, fetchTodoById } = require('../src/api');
const axios = require('axios');

jest.mock('axios')

describe('api:fetchPosts', () => {
    let response = {};
    beforeEach(() => {
        response = {
            data: [
                {
                    "userId": 1,
                    "id": 1,
                    "title": "Тестова назва 1",
                    "body": "Тестовий контент 1"
                },
                {
                    "userId": 1,
                    "id": 2,
                    "title": "Тестова назва 2",
                    "body": "Тестовий контент 2"
                },
                {
                    "userId": 1,
                    "id": 3,
                    "title": "Тестова назва 2",
                    "body": "Тестовий контент 3"
                }
            ]
        };
    })
    test('Отримання постів зі стороннього API', async () => {
        axios.get.mockResolvedValue(response)
        const posts = await fetchPosts();
        expect(axios.get).toHaveBeenCalledTimes(1) // Перевіряємо, що хочаб 1 раз було викликано до запуску get у axios
        expect(posts).toBeInstanceOf(Array); // Очікуємо масив
        expect(posts.length).toBeGreaterThan(0); // Перевіряємо, що масив не порожній
        expect(posts[0]).toHaveProperty('id'); // Перевіряємо структуру об'єкта
        expect(posts[1].id).toEqual(2); // Перевіряємо замоканий масив: другий пост має id = 2
        expect(posts[1].title).toEqual('Тестова назва 2'); // Перевіряємо замоканий масив: назву другого посту
    });
})

describe('api:fetchTodoById', () => {
    test('Отримання одного "todo" за id=1', async () => {
        // Готуємо "мокану" відповідь
        const mockTodo = {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        };
        axios.get.mockReturnValue(Promise.resolve({ data: mockTodo })); // Важливо: Promise.resolve для асинхронних "моків"

        const todo = await fetchTodoById(1);

        // Перевіряємо, що axios викликали з правильним URL
        expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos/1');
        // Перевіряємо, що повернули правильний title
        expect(todo.title).toEqual('delectus aut autem');
    });
});
