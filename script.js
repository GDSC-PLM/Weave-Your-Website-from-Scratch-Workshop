console.log('Starting JS');

// Query Selectors

/*
document.getElementById(): This method is used to access an element on the page by its unique ID.

document.getElementsByTagName(): This method is used to access all elements on the page with a given HTML tag.

document.querySelector(): This method is used to access the first element on the page that matches a given CSS selector.

document.querySelectorAll(): This method is used to access all elements on the page that match a given CSS selector.

document.getElementsByClassName(): This method is used to access all elements on the page with a given CSS class.
*/

// Event Listeners

/*
click: This event listener is triggered when the user clicks on an element on the page.

mouseover: This event listener is triggered when the user moves their cursor over an element on the page.

mouseout: This event listener is triggered when the user moves their cursor away from an element on the page.

change: This event listener is triggered when the value of an element on the page is changed, such as when a user types in a text field or selects an option from a drop-down menu.

submit: This event listener is triggered when a form is submitted on the page.
*/

// DOM elements: gets the element with its id
const Haribot = document.getElementById('Haribot');
const HoneyDroid = document.getElementById('HoneyDroid');
const Popstron = document.getElementById('Popstron');
const BabyBuster = document.getElementById('BabyBuster');
const Siborg = document.getElementById('Siborg');

// Audio objects: creates an audio object
const HaribotSound = new Audio('./assets/mp3/HaribotSound.mp3');
const HoneyDroidSound = new Audio('./assets/mp3/HoneyDroidSound.mp3');
const PopstronSound = new Audio('./assets/mp3/PopstronSound.mp3');
const BabyBusterSound = new Audio('./assets/mp3/BabyBusterSound.mp3');
const SiborgSound = new Audio('./assets/mp3/SiborgSound.mp3');

// Event listeners: when the user clicks on the element, it will play the sound
Haribot.addEventListener('click', () => {
  playSound(HaribotSound, Haribot);
});
HoneyDroid.addEventListener('click', () => {
  playSound(HoneyDroidSound, HoneyDroid);
});
Popstron.addEventListener('click', () => {
  playSound(PopstronSound, Popstron);
});
BabyBuster.addEventListener('click', () => {
  playSound(BabyBusterSound, BabyBuster);
});
Siborg.addEventListener('click', () => {
  playSound(SiborgSound, Siborg);
});

// Event listeners: when the user presses the key, it will play the sound
document.addEventListener('keydown', (event) => {
  if (event.key === 'q') {
    playSound(HaribotSound, Haribot);
  }
  if (event.key === 'w') {
    playSound(HoneyDroidSound, HoneyDroid);
  }
  if (event.key === 'e') {
    playSound(PopstronSound, Popstron);
  }
  if (event.key === 'r') {
    playSound(BabyBusterSound, BabyBuster);
  }
  if (event.key === 't') {
    playSound(SiborgSound, Siborg);
  }
});

// Function to play sound and add tickle class
function playSound(sound, element) {
  sound.currentTime = 0;
  element.classList.add('tickle');

  setTimeout(() => {
    element.classList.remove('tickle');
  }, 150);

  sound.play();
}

// Best Practice

// const elements = [
//   {
//     domElement: document.getElementById("Haribot"),
//     audioObject: new Audio("./assets/mp3/HaribotSound.mp3"),
//     key: "q",
//   },
//   {
//     domElement: document.getElementById("HoneyDroid"),
//     audioObject: new Audio("./assets/mp3/HoneyDroidSound.mp3"),
//     key: "w",
//   },
//   {
//     domElement: document.getElementById("Popstron"),
//     audioObject: new Audio("./assets/mp3/PopstronSound.mp3"),
//     key: "e",
//   },
//   {
//     domElement: document.getElementById("BabyBuster"),
//     audioObject: new Audio("./assets/mp3/BabyBusterSound.mp3"),
//     key: "r",
//   },
//   {
//     domElement: document.getElementById("Siborg"),
//     audioObject: new Audio("./assets/mp3/SiborgSound.mp3"),
//     key: "t",
//   },
// ];

// // Event listeners: click
// elements.forEach((element) => {
//   element.domElement.addEventListener("click", () => {
//     playSound(element.audioObject, element.domElement);
//   });
// });

// // Event listeners: keydown
// document.addEventListener("keydown", (event) => {
//   const element = elements.find((el) => el.key === event.key);
//   if (element) {
//     playSound(element.audioObject, element.domElement);
//   }
// });

// // Function to play sound and add tickle class
// function playSound(sound, element) {
//   sound.currentTime = 0;
//   element.classList.add("tickle");

//   setTimeout(() => {
//     element.classList.remove("tickle");
//   }, 150);

//   sound.play();
// }
