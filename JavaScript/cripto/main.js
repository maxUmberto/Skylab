// const result = document.querySelector('.result');

axios.get('https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=9cd5414b57e40dbcc290845e121d9b6ce3233e59')
    .then((response) => {

        // console.log(decodifica(response.data.numero_casas, response.data.cifrado));
        response.data.decifrado = decodifica(response.data.numero_casas, response.data.cifrado);
        response.data.resumo_criptografico = sha1(response.data.decifrado);

        console.log(response.data);
    })
    .catch((error) => {
        console.warn(error);
    });

function decodifica(num_casas, cifrado){
    let decodificado = '';

    for(let i = 0; i < cifrado.length; i++){
        let letter = cifrado[i];
        if(letter.match(/[a-z]/i)){
            // Get its code
			let code = cifrado.charCodeAt(i);

			// Uppercase letters
			if ((code >= 65) && (code <= 90))
				letter = String.fromCharCode(((code - 65 + num_casas) % 26) + 65);

			// Lowercase letters
			else if ((code >= 97) && (code <= 122))
				letter = String.fromCharCode(((code - 97 + num_casas) % 26) + 97);
        }
        decodificado += letter;
    }

    return decodificado;
}