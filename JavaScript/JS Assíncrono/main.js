// let xhr = new XMLHttpRequest();

// xhr.open('GET', 'http://api.github.com/users/maxUmberto');
// xhr.send(null);

// xhr.onreadystatechange = () => {
//     if(xhr.readyState === 4){
//         console.log(JSON.parse(xhr.responseText));
//     }
// }

// let minhaPromise = () => {
//     return new Promise((resolve, reject) => {
//         let xhr = new XMLHttpRequest();

//         xhr.open('GET', 'http://api.github.com/users/maxUmberto');
//         xhr.send(null);

//         xhr.onreadystatechange = () => {
//             if(xhr.readyState === 4){
//                 if(xhr.status === 200){
//                     resolve(JSON.parse(xhr.responseText));
//                 }
//                 else{
//                     reject('Erro na requisição');
//                 }
//             }
//         }
//     })
// }

axios.get('https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=9cd5414b57e40dbcc290845e121d9b6ce3233e59')
    .then((response) => {
        let result = document.querySelector('.result');

        result.innerHTML = JSON.parse(response.data);
        console.log(response.data);
    })
    .catch((error) => {
        console.warn(error);
    });