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

function createPosts(post) {
  // call resolve if promise successfully, something wrong call reject
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error");
      }
    }, 2000);
  });
}

// createPosts({ title: "Post Three", body: "This is post three" })
//   .then(getPosts)
//   .catch((err) => console.log(err));

// async / await
async function init() {
  await createPosts({ title: "Post Three", body: "This is post three" });

  getPosts();
}

init();

// promise.all
const promise_1 = Promise.resolve("Hello world!");
const promise_2 = 10;
const promise_3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, "Goodbye"));
const promise_4 = fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json());

Promise.all([promise_1, promise_2, promise_3, promise_4]).then((values) => console.log(values));
