const textArea = document.getElementsByTagName('textarea');
const result = document.querySelector('.nome-formatado h3');

// Faz um loop até o fim do numero total de caracteres da textarea
// Pra cada caractere a altura será a altura do scroll concatenado com "px"
for (let i = 0; i < textArea.length; i++) {
	textArea[i].setAttribute(
		'style',
		'height:' + textArea[i].scrollHeight + 'px;overflow-y:hidden;'
	);
	textArea[i].addEventListener('input', OnInput, false);
}
//Quando houver inserção de input, a altura inicial será 0 e depois será o scroll-height
function OnInput() {
	this.style.height = 0;
	this.style.height = this.scrollHeight + 'px';
}

// Copia o nome formatado
result.addEventListener('click', function () {
	document.execCommand('copy');
});

// Envia a copia pro clipboard
result.addEventListener('copy', function (event) {
	if (event.clipboardData) {
		event.clipboardData.setData('text/plain', result.textContent);
		alert('Nome formatado copiado.');
	}
	event.preventDefault();
});
