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

//Puxa o último item do array pro começo, transformado em maiúsculo
function sortLastName() {
	breakName();
	console.log(nameArray);
	abntArray = nameArray;
	return abntArray.unshift(
		abntArray.pop(abntArray[abntArray.length - 1]).toUpperCase() + ','
	);
}

// Abrevia os sobrenomes do meio
function shortenMiddleName() {
	breakName();
	sortLastName();

	//Se o array for maior q 2 itens
	if (abntArray.length > 2) {
		// crie um array temporário com o conteúdo do abntArray a partir do item 2
		const tempArray = abntArray.slice(2, abntArray.length);
		// Remova os sobrenomes do meio do abntArray
		abntArray.splice(2);

		tempArray.forEach(element => {
			// pegue o primeiro caractere de cada item dentro do tempArray
			let abrev = element.charAt();

			//se o item atual for um artigo, não faça nada
			if (
				element == 'das' ||
				element == 'do' ||
				element == 'dos' ||
				element == 'de' ||
				element == 'da' ||
				element == 'e'
			) {
			} else {
				// se for um nome, add a abreviação do nome -- em caixa alta com um ponto-- no fim do abntArray
				abntArray[abntArray.length] = `${abrev.toUpperCase()}.`;
			}
		});
		// Junte tudo numa string a ser exibida na pagina (declarada no documento 'script.js')
		result.textContent = abntArray.join(' ');
	}
}

// Casos de teste. Ao clicar, inserem um texto pre-definido no input de texto e chamam um evento 'input'
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
	nome.dispatchEvent(new Event('input'));
});

botaoFormatar.addEventListener('click', shortenMiddleName);
