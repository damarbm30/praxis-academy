// let myImg = document.querySelector("img");

// myImg.onclick = () => {
//   let mySrc = myImg.getAttribute("src");
//   if (mySrc === "/assets/img/firefox-icon.png") {
//     myImg.setAttribute("src", "/assets/img/firefox-icon-2.png");
//   } else {
//     myImg.setAttribute("src", "/assets/img/firefox-icon.png");
//   }
// };

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please enter your name: ");
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

myButton.onclick = () => {
  setUserName();
};
