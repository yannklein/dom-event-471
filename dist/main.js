/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

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


/***/ })

/******/ });
//# sourceMappingURL=main.js.map