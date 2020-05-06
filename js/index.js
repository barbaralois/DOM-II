// Your code goes here

console.log('1. Color change nav links - dblclick');
console.log('2. Nav border change - mouseover');
console.log('3. Nav border change - mouseleave');
console.log('4. Nav bg color change - click');
console.log('5. Site title color change - mouseover');
console.log('6. Header font size increase - mouseover');
console.log('7. Header font size decrease - mouseleave');
console.log('8. Image add border - click');
console.log('9. Paragraph italicized - click');
console.log('10. Paragraph normal - dblclick');

function randomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

function randomNum() {
  return Math.floor(Math.random() * 4 + 1);
}

let borderStyles = ['dashed', 'solid', 'dotted', 'double'];

// One - Nav link font changes color bold on double click

let navLinks = document.querySelectorAll('nav a');

let individualLinks = navLinks.forEach((link) => {
  link.addEventListener('dblclick', function (event) {
    event.preventDefault();
    link.style.color = '#' + randomColor();
    event.stopPropagation();
  });
});

// Two and Three- Nav border changes in style on mouseover
let navBar = document.querySelector('header.main-navigation');

navBar.addEventListener('mouseover', function (event) {
  navBar.style.borderBottom = `3px ${borderStyles[randomNum()]} gray`;
});

navBar.addEventListener('mouseleave', function (event) {
  navBar.style.borderBottom = `3px ${borderStyles[randomNum()]} gray`;
});

// Four - Nav background changes on click
navBar.addEventListener('dblclick', function (event) {
  if (navBar.style.backgroundColor === 'white') {
    navBar.style.backgroundColor = 'pink';
  } else {
    navBar.style.backgroundColor = 'white';
  }
});

// Five - Title color changes on mouseover
let companyTitle = document.querySelector('h1');

companyTitle.addEventListener('mouseover', function (event) {
  companyTitle.style.color = '#' + randomColor();
});

// Six and Seven - Header font size increases on mouseover of that content's div, returns on mouseleave
let pageHeaders = document.querySelectorAll('h2');

let changeSize = pageHeaders.forEach((header) => {
  header.addEventListener('mouseover', function (event) {
    header.style.fontSize = '4rem';
    header.style.marginBottom = '-1%';
  });
  header.addEventListener('mouseleave', function (event) {
    header.style.fontSize = '3.2rem';
    header.style.marginBottom = '0';
  });
});

// Eight - Add border to img on click

let images = document.querySelectorAll('img');

let getBorder = images.forEach((image) => {
  image.addEventListener('click', function (event) {
    image.style.border = `${randomNum()}px solid black`;
  });
});

// Nine and Ten - Font italicized on click & normal on double click

let paragraphs = document.querySelectorAll('p');

let italicized = paragraphs.forEach((paragraph) => {
  paragraph.addEventListener('click', function (event) {
    paragraph.style.fontStyle = 'italic';
  });
  paragraph.addEventListener('dblclick', function (event) {
    paragraph.style.fontStyle = 'normal';
  });
});
