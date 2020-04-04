// A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):
// const usuarios = [
//     { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
//     { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
//     { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
//    ];

// Utilizando o map
// Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]

// Utilizando o filter
// Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
// anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

// Utilizando o find
// Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined

// Unindo operações
// Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
// no máximo 50 anos:
// Resultado:
// [
//     { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
//     { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
//    ]

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

console.log(usuarios.map(users => users.idade));
console.log(usuarios.filter(users => users.empresa === 'Rocketseat' && users.idade > 18));
console.log(usuarios.find(users => users.empresa === 'Google'));
console.log(usuarios.map(users => ({...users, idade : users.idade * 2})).filter(users => users.idade <= 50));