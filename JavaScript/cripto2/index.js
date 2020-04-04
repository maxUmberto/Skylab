const axios = require ('axios');
const fs = require('fs');
const crypto = require('crypto');
const FormData = require('form-data');
const request = require('request');
const caminho = __dirname + '/answer.json';

axios.get('https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=9cd5414b57e40dbcc290845e121d9b6ce3233e59')
    .then(response => {
        solve(response.data);
        // const file = JSON.parse(fs.readFileSync(caminho, 'utf-8'));
        // console.log(file);
    })

function readFile(){
    const file = JSON.parse(fs.readFileSync(caminho, 'utf-8'));
    return file;
}

function submit() {
    let req = request.post('https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=9cd5414b57e40dbcc290845e121d9b6ce3233e59', function (err, resp, body) {
        if (err) {
            console.log(err);
        } else {
            console.log('Nota: ' + body);
        }
    });
    let form = req.form();
    form.append('answer', fs.createReadStream(caminho));

}

// function submit(){
//     const file = fs.createReadStream(caminho);
//     let formData = new FormData;
//     formData.append('answer', file);

//     axios({
//         method: 'post',
//         url: 'https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=9cd5414b57e40dbcc290845e121d9b6ce3233e59',
//         data: formData,
//         headers: {'Content-Type': 'multipart/form-data' }
//         })
//         .then(function (response) {
//             //handle success
//             console.log(response);
//         })
//         .catch(function (response) {
//             //handle error
//             console.log(response);
//         });
// }

// function submit() {
//     try {       
//       const streamFile = fs.createReadStream(caminho);      
//       const form = new FormData();
//       form.append('answer', streamFile);   
      
//       const { data } = await axios.post(`https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=9cd5414b57e40dbcc290845e121d9b6ce3233e59`, form, { headers: {'Content-Type': 'multipart/form-data'} })
      
//       console.log(data)

//       return data;

//     } catch (error) {
//       console.log("An error has occurred: ", error)
//     }
// }

function saveInFile(file){
    fs.writeFile(caminho, JSON.stringify(file), err => {
        if(err)
            console.log(err);
    });
    submit();
}

function solve(data){
    // const file = JSON.parse(fs.readFileSync(caminho, 'utf-8'));
    data.decifrado = decript(data.cifrado, data.numero_casas);
    data.resumo_criptografico = crypto.createHash('sha1').update(data.decifrado).digest('hex');

    saveInFile(data);
}

function decript(cifrado, num_casas){
    let decodificado = '';

    for(let i = 0; i < cifrado.length; i++){
        let letra = cifrado[i];
        if(letra.match(/[a-z]/i)){
            // Get its code
			let code = cifrado.charCodeAt(i);

			// Uppercase letras
			if ((code >= 65) && (code <= 90))
				letra = String.fromCharCode(((code - 65 + num_casas) % 26) + 65);

			// Lowercase letras
			else if ((code >= 97) && (code <= 122))
				letra = String.fromCharCode(((code - 97 + num_casas) % 26) + 97);
        }
        decodificado += letra;
    }

    return decodificado;
}
