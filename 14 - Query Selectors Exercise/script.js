//Multiple ways to select the first paragraph:

document.getElementById('first');

document.querySelector('#first');

document.getElementsByClassName('special')[0];

document.querySelector('.special');

document.querySelectorAll('.special')[0];

document.getElementsByTagName('p')[0];

document.querySelector('p');

document.querySelectorAll('p')[0];

document.querySelector('h1 + p');
