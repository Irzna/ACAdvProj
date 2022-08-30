// function createNode(element) {
//     return document.createElement(element);
// }

// function append(parent, el) {
//   return parent.appendChild(el);
// }

//const ul = document.getElementById('fetchinfo');
//const url = '"https://jsonplaceholder.typicode.com/posts';

const button = document.getElementById("button");
async function getInfo() {
  const titlefetch = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      data.forEach(function (el) {
        const newLinode = document.createElement("li");
        const newTitleiNode = document.createElement("div");
        const newBodynode = document.createElement("div");

        newTitleiNode.innerHTML(el.title);
        newBodynode.innerHTML(el.body);
        newLinode.appendChild(newTitleiNode);
        newLinode.appendChild(newBodynode);
        post.appendChild(newLinode);
        //new
      });
    })
    .catch((er) => console.log(er));
  // titlefetch.forEach((el) => {});
  return titlefetch;
}
button.addEventListener("click");

//sozdat button ,najimaya na nego  doljen poyavitsya picture pokazivauaschii looading, posletogo ka zagruzitsya finally ubiraem loading, i dannie doljni pokazatsya  v blokax , vnizu doljno bit mesto 1 i knopka ,najimaya na knopku poyavlyaetsya tolko s etim id
