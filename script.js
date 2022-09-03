// function createNode(element) {
//   return document.createElement(element);
// }

// function append(parent, el) {
//   return parent.appendChild(el);
// }

// //const ul = document.getElementById('fetchinfo');
// const url_api = '"https://jsonplaceholder.typicode.com/posts';

// const getButton = document.getElementById("button");

// const getPosts = () => {
//   //const titlefetch = await fetch("https://jsonplaceholder.typicode.com/posts")
//   const titlefetch = fetch(url_api)
//     .then((response) => response.json())
//     .then((data) => {
//       data.forEach(function (el) {
//         const newLinode = createNode("li"); //document.createElement("li");
//         const newTitleiNode = createNode("div"); //document.createElement("div");
//         const newBodynode = createNode("div"); // document.createElement("div");

//         newTitleiNode.innerHTML = el.title;
//         newBodynode.innerHTML = el.body;
//         //append()
//         newLinode.appendChild(newTitleiNode);
//         newLinode.appendChild(newBodynode);
//         post.appendChild(newLinode);
//         //new
//       });
//     })
//     .catch((er) => console.log(er));
//   // titlefetch.forEach((el) => {});
//   return titlefetch;
// };
// getButton.addEventListener("click", getPosts());

//sozdat button ,najimaya na nego  doljen poyavitsya picture pokazivauaschii looading, posletogo ka zagruzitsya finally ubiraem loading, i dannie doljni pokazatsya  v blokax , vnizu doljno bit mesto 1 i knopka ,najimaya na knopku poyavlyaetsya tolko s etim id
//mushegh
const API_URL = `https://jsonplaceholder.typicode.com/posts`;

const postsNode = document.getElementById("posts");
const postsGetButtonNode = document.getElementById("postsGetButton");
const filterInputNode = document.getElementById("filter-input");

let store;

const getPosts = () => {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      store = data;
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
    });
};

function filterPosts(userId, posts) {
  console.log(posts);
  return posts.filter((post) => post.userId === userId);
}

filterInputNode.addEventListener("change", () => {
  const value = filterInputNode.value;
  console.log(value);
  const filteredPosts = filterPosts(+value, store);
  console.log(filteredPosts);
});
postsGetButtonNode.addEventListener("click", getPosts);
