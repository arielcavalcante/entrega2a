// const towers = document.querySelector('section:first-of-type');
const firstTower = document.querySelector('div:first-of-type');
const staticDiscs = firstTower.getElementsByTagName('div');
const inputNumber = document.querySelector('#inputDiscos');
const rangeNumber = document.querySelector('#rangeDiscos');

// Quando o slider for alterado a text input recebe o valor do range
rangeNumber.addEventListener('input', function (e) {
	inputNumber.value = e.target.value;
	createDisc();
});
// Quando o text input for alterado o slider recebe o valor do text input
inputNumber.addEventListener('input', function (e) {
	rangeNumber.value = e.target.value;
	createDisc();
});

function createDisc() {
	for (let i = 0; i < inputNumber.value - 3; i++) {
		const newDisc = document.createElement('div');
		newDisc.setAttribute('id', `disco__${i + 4}`);
		newDisc.setAttribute('style', `width: ${3 * (i + 4)}vw`);
		// firstTower.replaceChild(newDisc, staticDiscs);
		staticDiscs[staticDiscs.length - 1].after(newDisc);
	}
}
