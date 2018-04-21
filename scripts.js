// scripts.js
var x = prompt('Wprowadz liczbe'),
	y = prompt ('Wprowadz liczbe');

	function getTriangleArea(a, h) {
		if (a>0 && h>0){
			return a*h/2;
		} else {
			console.log('Nieprawidłowe dane!')
		}
	}
	console.log(getTriangleArea(x, y));

	var triangle1Area = getTriangleArea(10, 15);
		console.log(triangle1Area);
	var triangle2Area = getTriangleArea(9, 18);
		console.log(triangle2Area);
	var triangle3Area = getTriangleArea(10, 20);
		console.log(triangle3Area);