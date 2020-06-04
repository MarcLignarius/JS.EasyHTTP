const http = new easyHTTP();

// Get Posts
http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
  if (err) {
    console.log(err);
  } else {
    console.log('GET', posts);
  }
});

// Get Post
http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, post) {
  if (err) {
    console.log(err);
  } else {
    console.log('GET', post);
  }
});

// Create data
const data = {
  title: 'New Post',
  body: 'This is a new post',
};

// Create post
http.post('https://jsonplaceholder.typicode.com/posts', data, function (
  err,
  post
) {
  if (err) {
    console.log(err);
  } else {
    console.log('POST', post);
  }
});

// Update post
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (
  err,
  post
) {
  if (err) {
    console.log(err);
  } else {
    console.log('PUT', post);
  }
});

// Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function (
  err,
  response
) {
  if (err) {
    console.log(err);
  } else {
    console.log('DELETE', response);
  }
});
