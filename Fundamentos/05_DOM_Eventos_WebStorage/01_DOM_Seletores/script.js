 /*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
*/

//TODO Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

document.getElementsByTagName('p')[0].innerText = 'Me vejo trabalhando com programação e tendo uma boa vida financeira e familiar.'

//TODO Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)';

//TODO Crie uma função que mude a cor do quadrado vermelho para branco.

document.getElementsByTagName('section')[0].style.backgroundColor = 'white';

//TODO Crie uma função que corrija o texto da tag <h1>.

document.getElementsByClassName('title')[0].innerText = 'Exercício 5.1 - JavaScript';

//TODO Crie uma função que modifique todo o texto da tag <p> para maiúsculo.

let paragraph = document.getElementsByTagName('p');

for(let i = 0; i < paragraph.length; i += 1){
    paragraph[i].style.textTransform = 'uppercase'; 
}

//TODO Crie uma função que exiba o conteúdo de todas as tags <p> no console.

let paragraph2 = document.getElementsByClassName('center-content');

for(let i = 0; i < paragraph2.length; i += 1){
    console.log(paragraph2[i].innerText); 
}
