const nome = document.querySelector('#nome');
const botaoFormatar = document.querySelector('.textarea__wrapper button');
const teste0 = document.querySelector('.tests__wrapper button:first-of-type');
const teste1 = document.querySelector('.tests__wrapper button+button');
const teste2 = document.querySelector('.tests__wrapper button:nth-of-type(3)');
const limpar = document.querySelector('.tests__wrapper button:nth-of-type(4)');

var nameArray = [];
var abntArray = [];

//Separa o nome inserido na textbox em palavras num array
function breakName() {
	return (nameArray = nome.value.split(' '));
}

//Puxa o
function sortLastName() {
	breakName();
	console.log(nameArray);
	abntArray = nameArray;
	return abntArray.unshift(
		abntArray.pop(abntArray[abntArray.length - 1]).toUpperCase() + ','
	);
}

function shortenMiddleName() {
	breakName();
	sortLastName();

	if (abntArray.length > 2) {
		const tempArray = abntArray.slice(2, abntArray.length);

		abntArray.splice(2, abntArray.length - 2);
		tempArray.forEach(element => {
			let abrev = element.charAt();

			//se a string atual for um artigo, não faça nada
			if (
				element == 'das' ||
				element == 'do' ||
				element == 'dos' ||
				element == 'de' ||
				element == 'da' ||
				element == 'e'
			) {
			} else {
				// se for um nome, add a abreviação do nome em caixa alta com um ponto
				abntArray[abntArray.length] = `${abrev.toUpperCase()}.`;
			}
		});
		result.textContent = abntArray.join(' ');
	}
}

teste0.addEventListener('click', function () {
	nome.value = 'Antônio Augusto Ribeiro Pedroza';
	nome.dispatchEvent(new Event('input'));
});
teste1.addEventListener('click', function () {
	nome.value = 'Luís Inácio Lula da Silva';
	nome.dispatchEvent(new Event('input'));
});
teste2.addEventListener('click', function () {
	nome.value =
		'Pedro de Alcântara Francisco Antônio João Carlos Xavier de Paula Miguel Rafael Joaquim José Gonzaga Pascoal Cipriano Serafim de Bragança e Bourbon';
	nome.dispatchEvent(new Event('input'));
});

limpar.addEventListener('click', function () {
	nome.value = '';
});

botaoFormatar.addEventListener('click', shortenMiddleName);
