const http = new easyHTTP();

// // Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// // Get Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

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
    console.log(post);
  }
});
