// datatyper

string = 'Harald';
number = 52;
boolean = true;

// variabler

const userName = 'Harald';
let userAge = 52;

console.log(`Username is : ${userName}, age is : ${userAge}`);
console.log('Username is ' + userName + ', age is : ' + userAge + '.');

// Hente et element

const hamburgerImg = document.querySelector('#hamburgerImg');

function hamburgerToggle() {
  console.log('Hi from hamburgerToggle');

  const navListElement = document.querySelector('.navList'); // Bevist brukt klasse for kun et element med det klassenavnet
  console.log(navListElement);

  // Metode 1: Skrive CSS i JS som blir inline-CSS
  navListElement.style.display = 'flex';
  navListElement.style.flexDirection = 'column';

  // Metode 2: Endre aktivt klassenavn via external-CSS fil
  /*navListElement.classList.add("show");
  navListElement.classList.remove("hidden");*/
}

hamburgerImg.addEventListener('click', hamburgerToggle);
