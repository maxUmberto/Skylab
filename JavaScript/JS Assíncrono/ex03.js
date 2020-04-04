// 3º exercício
// A partir do resultado do exemplo anterior adicione um indicador de carregamento em tela no lugar
// da lista apenas enquanto a requisição estiver acontecendo:
// <li>Carregando...</li>
// Além disso, adicione uma mensagem de erro em tela caso o usuário no Github não exista.
// Dica: Quando o usuário não existe, a requisição irá cair no .catch com código de erro 404.

let inputElement = document.querySelector('.container .form input');
let listElement = document.querySelector('.container .content #list');

function showData(){

    if(!inputElement.value){
        return;
    }

    listElement.innerHTML = '';
    var carregando = document.createElement('li');
    var carregandoText = document.createTextNode('Carregando...');

    carregando.appendChild(carregandoText);
    listElement.appendChild(carregando);

    setTimeout(() => {
        axios.get(`https://api.github.com/users/${inputElement.value}/repos`)
        .then((response) => {
            
            listElement.innerHTML = '';
            for(const repo of response.data){
                displayList(repo);
            }
        })
        .catch((error) => {
            listElement.innerHTML = '';
            displayError(error.response.status);
        })
    },2000);

}

function displayList(repo){

    let liElement = document.createElement('li');
    let textElement = document.createTextNode(repo.name);

    liElement.appendChild(textElement);
    listElement.appendChild(liElement);

    inputElement.value = '';
}

function displayError(status = false){
    let liElement = document.createElement('li');
    let textElement;

    if(status === 404){
        textElement = document.createTextNode('Usuário não encontrado');
    }
    else{
        textElement = document.createTextNode('Oops, houve um erro, tente novamente');
    }

    liElement.appendChild(textElement);
    listElement.appendChild(liElement);
}