function deleteChildNode(parent) {
  if (parent.hasChildNodes()) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
}
function hidenEl(parent) {
  return (parent.hidden = true);
}
function showEl(parent) {
  return (parent.hidden = false);
}

const API_URL = `https://jsonplaceholder.typicode.com/posts`;
console.log(API_URL);
const postsNode = document.getElementById("posts");
const postsGetButtonNode = document.getElementById("postsGetButton");
const filterInputNode = document.getElementById("filter-input");
const filterSubmit = document.getElementById("filter-text");
const loadShow = document.getElementById("load");

let store;

const getPosts = () => {
  deleteChildNode(postsNode);
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      store = data;
      showEl(loadShow);
      setTimeout(function () {
        rendering(store);
        hidenEl(loadShow);
      }, 1000);

      //delay(50000, rendering,store);
    });
};

function filterPosts(userId, posts) {
  console.log(typeof userId);
  if (userId === 0) {
    return posts;
  }
  return posts.filter((post) => post.userId === userId);
}
function getFiltredPost() {
  const value = filterInputNode.value;
  //console.log(value);
  const filteredPosts = filterPosts(+value, store);

  deleteChildNode(postsNode);
  showEl(loadShow);
  setTimeout(function () {
    rendering(filteredPosts);
    hidenEl(loadShow);
  }, 1000);
}

function rendering(data) {
  data.forEach((el) => {
    const newLiNode = document.createElement("li");
    const newTitleNode = document.createElement("div");
    const newBodyNode = document.createElement("div");

    newTitleNode.innerHTML = el.title;
    newBodyNode.innerHTML = el.body;
    newLiNode.appendChild(newTitleNode);
    newLiNode.appendChild(newBodyNode);

    postsNode.appendChild(newLiNode);
  });
}

postsGetButtonNode.addEventListener("click", getPosts);

//filterInputNode.addEventListener("change", getFiltredPost);
filterSubmit.addEventListener("click", getFiltredPost);
