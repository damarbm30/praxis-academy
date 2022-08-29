const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.map((post, index) => {
      output += `<li key=${index}>${post.title}</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
}

function createPosts(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback(); // function called after the post is pushed
  }, 2000);
}

createPosts({ title: "Post Three", body: "This is post three" }, getPosts);

// getPosts need 1 seconds while createPosts needs 2 seconds so the
// recently created post won't come out. Callback will be used here
