// Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
// nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
// URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:
// URL de exemplo: https://api.github.com/users/diego3g/repos
// Basta alterar "diego3g" pelo nome do usuário.
// <input type="text" name="user">
// <button onclick="">Adicionar</button>
// Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:
// <ul>
//     <li>repo1</li>
//     <li>repo2</li>
//     <li>repo3</li>
//     <li>repo4</li>
//     <li>repo5</li>
// </ul>

let inputElement = document.querySelector('.container .form input');
let listElement = document.querySelector('.container .content #list');

function showData(){

    if(!inputElement.value){
        return;
    }

    console.log(inputElement.value);

    axios.get(`https://api.github.com/users/${inputElement.value}/repos`)
        .then((response) => {
            
            listElement.innerHTML = '';
            for(const repo of response.data){
                displayList(repo);
            }
        })
        .catch((error) => {
            console.log(error);
        })

}

function displayList(repo){

    let liElement = document.createElement('li');
    let textElement = document.createTextNode(repo.name);

    liElement.appendChild(textElement);
    listElement.appendChild(liElement);

    inputElement.value = '';
}