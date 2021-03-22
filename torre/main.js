const inputNumber = document.getElementById('inputDiscos');
const rangeNumber = document.getElementById('rangeDiscos');
const calcular = document.getElementById('calcular');

// Quando o slider for alterado a text input recebe o valor do range
rangeNumber.addEventListener('input', function (e) {
	inputNumber.value = e.target.value;
});
// Quando o text input for alterado o slider recebe o valor do text input
inputNumber.addEventListener('input', function (e) {
	rangeNumber.value = e.target.value;
});
let arrMoves = [`<p>Movimentos: </p>`, `<p>(Origem) ~> (Destino)</p>`];

function hanoi(n, start, end) {
	let countMoves = 0;
	let other = 6 - (start + end);
	if (n === 1) {
		arrMoves.push(`<p>${start}   ~>   ${end}</p>`);
		countMoves++;
	} else {
		hanoi(n - 1, start, other);
		countMoves++;
		arrMoves.push(`<p>${start}   ~>   ${end}</p>`);
		hanoi(n - 1, other, end);
		countMoves++;
	}
	document.querySelector('section+section').innerHTML = arrMoves.join(' ');
}

function displayCalcs() {
	console.clear();
	arrMoves = ['<p>Movimentos: </p>', '<p>(Origem) ~> (Destino)</p>'];
	hanoi(parseInt(document.getElementById('inputDiscos').value), 1, 3);
}

calcular.addEventListener('click', displayCalcs);
