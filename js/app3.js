const http = new EasyHTTP();

// Get users
http
  .get('https://jsonplaceholder.typicode.com/users')
  .then((data) => console.log('GET', data))
  .catch((err) => console.log(err));

// User data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com',
};

// Create user
http
  .post('https://jsonplaceholder.typicode.com/users', data)
  .then((data) => console.log('POST', data))
  .catch((err) => console.log(err));

// Update user
http
  .put('https://jsonplaceholder.typicode.com/users/2', data)
  .then((data) => console.log('PUT', data))
  .catch((err) => console.log(err));

// Update user
http
  .delete('https://jsonplaceholder.typicode.com/users/2')
  .then((data) => console.log('DELETE', data))
  .catch((err) => console.log(err));
