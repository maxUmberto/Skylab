// Funão delay aciona o .then após 1s
// const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

// function umPorSegundo() {
//     delay().then(() => {
//         console.log('1s');

//         delay().then(() => {
//             console.log('2s');

//             delay().then(() => {
//                 console.log('3s');
//             });
//         })
//     });
// }

// umPorSegundo();

// const delay = () => new Promise( (resolve, reject) => {
//     setTimeout(resolve, 1000);
// })

// const umPorSegundo = async () => {
//     await delay(console.log('1s'));
//     await delay(console.log('2s'));
//     await delay(console.log('3s'));
// }

// umPorSegundo();
// ==========================================================================

// import axios from 'axios';

// function getUserFromGithub(user) {
//     axios.get(`https://api.github.com/users/${user}`)
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(err => {
//             console.log('Usuário não existe');
//         })
// }

// getUserFromGithub('diego3g');
// getUserFromGithub('diego3g124123');

// import axios from 'axios';

// const getUserFromGithub = async (user) => {
//     try{
//         const response = await axios.get(`https://api.github.com/users/${user}`);

//         console.log(response);
//     }
//     catch(err){
//         console.log('ERRRROU', err);
//     }
// }

// getUserFromGithub('diego3g');
// getUserFromGithub('diego3g124123');
// ==========================================================================

// class Github {
//     static getRepositories(repo) {
        
//         axios.get(`https://api.github.com/repos/${repo}`)
//             .then(response => {
//                 console.log(response.data);
//             })
//             .catch(err => {
//                 console.log('Repositório não existe');
//             })
//     }
// }

// Github.getRepositories('rocketseat/rocketseat.com.br');
// Github.getRepositories('rocketseat/dslkvmskv');

// import axios from 'axios';

// class Github {
//     static async getRepositories(repo) {
//         try {
//             const response = await axios.get(`https://api.github.com/repos/${repo}`);

//             console.log(response);
//         }
//         catch(err){
//             console.log('DEU MERDA', err);
//         }
//     }
// }

// Github.getRepositories('rocketseat/rocketseat.com.br');
// Github.getRepositories('rocketseat/dslkvmskv');
// ==========================================================================

// const buscaUsuario = usuario => {
//     axios.get(`https://api.github.com/users/${user}`)
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(err => {
//             console.log('Usuário não existe');
//         });
// }

// buscaUsuario('diego3g');

import axios from 'axios';

const buscaUsuario = async usuario => {
    try{
        const response = await axios.get(`https://api.github.com/users/${usuario}`);

        console.log(response);
    }
    catch(err){
        console.log('YOU ARE WRONG!!!!', err);
    }
}

buscaUsuario('diego3g');
