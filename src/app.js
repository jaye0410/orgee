((arg) => {
	console.log(`This is ${arg}!`);
})('Arrow function');

import Es5Tester from './es5/Es5Tester';
var tester = new Es5Tester('Test!!');

document.addEventListener('DOMContentLoaded', () => {
	console.log(document.querySelector('#wrapper'));
});
