const axios = require('axios');

const baseURL = 'http://localhost:8000/api';

describe('UserController API Endpoints', () => {
  it('GET /users - Menampilkan daftar semua pengguna', async () => {
    const response = await axios.get(`${baseURL}/users`);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });

  it('POST /users - Menambahkan pengguna baru', async () => {
    const newUser = {
      name: 'Fairuzi Iszam',
      email: 'fairuz@gmail.com',
      age: 28
    };

    const response = await axios.post(`${baseURL}/users`, newUser);
    expect(response.status).toBe(201);
    expect(response.data.name).toBe(newUser.name);
    expect(response.data.email).toBe(newUser.email);
    expect(response.data.age).toBe(newUser.age);
  });

  it('GET /users/:id - Mendapatkan pengguna berdasarkan ID', async () => {
    const newUser = await axios.post(`${baseURL}/users`, {
      name: 'Dhiya Nabila',
      email: 'Dhiya@gmail.com',
      age: 25
    });

    const userId = newUser.data.id;

    const response = await axios.get(`${baseURL}/users/${userId}`);
    expect(response.status).toBe(200);
    expect(response.data.id).toBe(userId);
    expect(response.data.name).toBe('Dhiya Nabila');
    expect(response.data.email).toBe('Dhiya@gmail.com');
    expect(response.data.age).toBe(25);
  });

  it('PUT /users/:id - Memperbarui pengguna berdasarkan ID', async () => {
    const newUser = await axios.post(`${baseURL}/users`, {
      name: 'Iszam',
      email: 'Iszam@gmail.com',
      age: 30
    });

    const userId = newUser.data.id;

    const updatedUser = {
      name: 'Update Iszam',
      email: 'updatediszam@gmail.com',
      age: 31
    };

    const response = await axios.put(`${baseURL}/users/${userId}`, updatedUser);
    expect(response.status).toBe(200);
    expect(response.data.name).toBe(updatedUser.name);
    expect(response.data.email).toBe(updatedUser.email);
    expect(response.data.age).toBe(updatedUser.age);
  });

  it('DELETE /users/:id - Menghapus pengguna berdasarkan ID', async () => {
    const newUser = await axios.post(`${baseURL}/users`, {
      name: 'Bobi',
      email: 'bobi23@gmail.com',
      age: 40
    });

    const userId = newUser.data.id;

    const response = await axios.delete(`${baseURL}/users/${userId}`);
    expect(response.status).toBe(200);
    expect(response.data.message).toBe('User deleted successfully');
  });
});
