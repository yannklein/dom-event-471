// console.log("Hello from src/index.js!");


// ////////
// Select DOM elements
// ////////

// with its ID (seigo)
const seigo = document.querySelector("#seigo");
// console.log(seigo);

// with its tag type (h2)
const h2 = document.querySelector("h2");
// with its class (group)
const group = document.querySelector(".group");

// by nest selection (ul of the group)
// const ul = group.querySelector("ul");
// console.log(ul);
// select multiple elements (all the card)
// const card = document.querySelector(".card"); // select the first card
const cards = document.querySelectorAll(".card");
// console.log(cards[1]);

// ////////
// Modify the DOM
// ////////

// add an HTML element (Juventus di Escuela 🇮🇹 in list)
const ul = group.querySelector("ul");
ul.insertAdjacentHTML("afterbegin", `<li>Juventus di Syncalysta 🇮🇹</li>`);

// same but more complex (add Alex!!)
const vipMentor = document.querySelector("#vip-mentor ul");
vipMentor.insertAdjacentHTML("beforeend", `
  <li>
    <img src="https://res.cloudinary.com/wagon/image/upload/c_fill,g_face,h_200,w_200/v1601806062/etpgnpgouvjn9vo2obu9.jpg" alt="">
    <p>Alex</p>
  </li>
`);

// change the element style (group background to green)
// Careful! background-color => backgroundColor
group.style.backgroundColor = "#F96391";

// add a class to the element (add text-white to group)
group.classList.add("text-white"); // Careful! no DOT

// remove it
group.classList.remove("text-white");

// add/remove every 1sec
setInterval(() => {
  group.classList.toggle("text-white");
}, 1000);

// Read/Write for inputs (change the value in the email input)
const email = document.querySelector("#email");
console.log(email.value);
email.value = "yann@lewagon.org";
// Read/Write the (inner) text and HTML content (Vip mentor club title)\
const vipMentorTitle = document.querySelector("#vip-mentor h3");
console.log(vipMentorTitle.innerText);
// vipMentorTitle.innerText = "Thanks Yuping!";
console.log(vipMentorTitle.innerHTML);
vipMentorTitle.innerHTML = "Thanks <strong>Yuping!</strong>";

// ////////
// Add event listeners
// ////////

// // //1. Select seigo's picture
// const seigoImg = document.querySelector(".cards img");

// // 2. Listen to a click
// seigoImg.addEventListener("click", (event) => {
//   // do something when Seigo img is clicked
//   // 3. Modify the DOM (add the class selected)
//   console.log(event);
//   // seigoImg.classList.add("selected");
//   event.currentTarget.classList.toggle("selected");
// });


// 1. Select all pictures
const images = document.querySelectorAll("img");
console.log(images);
images.forEach((image) => {
  // 2. Listen to a click
  image.addEventListener("click", (event) => {
    // 3. Modify the DOM
    // debugger
    event.currentTarget.classList.toggle("selected");
  });
});
