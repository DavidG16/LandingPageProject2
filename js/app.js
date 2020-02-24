/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const navList = document.getElementById("navbar__list");
let navElements = document.querySelectorAll("section");



/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav

navElements.forEach(el => {
  const navlistElement = `<li class='menu__link ${el.className}' data-link=${el.id}><a href="#${el.id}">${el.dataset.nav}</li>`;
  navList.insertAdjacentHTML('beforeend', navlistElement)
});




// Scroll to anchor ID using scrollTO event
navList.addEventListener('click', e => {
  e.preventDefault();
  const parent = e.target.hasAttribute('data-link') ? e.target : e.target.parentElement;
  const elementToScrollTo = document.getElementById(parent.dataset.link);
  elementToScrollTo.scrollIntoView({block: 'end', behavior: 'smooth'})
});

// Set section and nav link as active using the IntersectionObserver pattern
const callback = entries => {
  entries.forEach(entry => {
    const navListElement = document.querySelector(
      `.menu__link[data-link='${entry.target.id}']`,
    );
    const section = document.getElementById(entry.target.id);

    if (entry && entry.isIntersecting) {
      navListElement.classList.add('active');
      section.classList.add('active')
    } else {
      if (navListElement.classList.contains('active')) {
        navListElement.classList.remove('active')
      }

      if (section.classList.contains('active')) {
        section.classList.remove('active')
      }
    }
  })
};

// Options for the observer. Most important is the threshold
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.7,
};

// Setting an observer with options and a callback which checks if the navelement should be active
// support for all modern browser https://caniuse.com/#feat=intersectionobserver
const observer = new IntersectionObserver(callback, options);
navElements.forEach(element => {
  observer.observe(document.getElementById(element.id))
});


const button = document.querySelector('.btn');

button.addEventListener('click', () => {
  let divTag = document.createElement('p');
  divTag.setAttribute('class','landing_container');
  divTag.appendChild(document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. '));
  document.getElementById('section3').appendChild(divTag);


} , {once : true});