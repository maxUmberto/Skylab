// const minhaPromise = () => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('OK');
//     }, 2000);
// })

// minhaPromise()
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {
//         console.log(err);
//     })

// async function executaPromise(){
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
// }

// executaPromise();

// const executaPromise = async () => {
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
// }

// executaPromise();

import axios from 'axios';

class Api{
    static async getUserInfo(username){
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`);
    
            console.log(response);
        }
        catch(err){
            console.warn('Erro na API');
        }
    }
}

Api.getUserInfo('maxUmberto');
Api.getUserInfo('maxUmbertoasdas');