/*
    Variáveis são "recipientes" onde podemos armazenar informações que podem variar, ou seja, podem ter qualquer tipo de valor.

    No Javascript temos 3 palavras chaves para declarar variáveis:
    -> var (pode repetir variável)
    -> let (não deixa repetir variável)
    -> const
*/

/* ----- Exemplos (var) ----- */

// (1)
// var pote = "Bombom";
// alert(pote);


// (2)
// // DECLARAÇÃO DE VARIAVEIS
// var a,b,c;

// // ATRIBUIÇÃO DE VALORES
// a = 2;
// b = 3;
// c = a + b;

// alert(c);


// (3)
// var nome, sobrenome, nomeCompleto, idade, soma;

// nome = "Gabriel";
// sobrenome = "Souza";
// idade = 25;

// nomeCompleto = nome + " " + sobrenome;

// soma = idade + 10;
// pessoa = nomeCompleto + " " + soma;

// document.getElementById("texto").innerHTML = pessoa;


/* ----- Exemplos (let) ----- */

// (1)
// let x = 10; // aqui é 10

// {
//     let x = 2; // aqui é 2
// }

// // aqui também vai ser 10
// document.getElementById("texto").innerHTML = x;


/* ----- Exemplos (const) ----- */

// (1)
// const x = 10; // aqui é 10

// {
//     const x = 2; // aqui é 2
// }

// const x = 5; // indefinido

// // aqui também vai ser 10
// document.getElementById("texto").innerHTML = x;