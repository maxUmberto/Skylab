import classeUsuario, {idade as idadeUsuario} from './functions.js';

const h1 = document.querySelector('h1');

h1.innerHTML = '';
h1.appendChild(document.createTextNode(idadeUsuario));

console.log(classeUsuario.info());