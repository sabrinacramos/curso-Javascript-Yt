/* ARRAYS
Os arrays JavaScript são usados para armazenar vários valores em uma única variável. Diferentes objetos, que funcionam com propriedaes ou "nomes" que você dá para os itens dentro dele, os arrays não possuem propriedades. O item dentro dele é encontrado pela posição.

Imagine um array como uma lista de itens, com controle, por ordem de posição dentro dele. 

Ex: cont lista = ["arroz", "feijão", "macarrão", "leite"];

A lista[0] (lista na posição 0) vai conter o valor "arroz".
A lista[1] (lista na posição 0) vai conter o valor "feijão".

E assim por diante. 

*/
                        //0      //1        //2         //3    
const listaMercado = ["arroz", "feijão", "macarrão", "leite"];
//alert(listaMercado[0]);

/*
----! TAMBEM PODE SER ESCRITO ASSIM !----
const listaMercado = [
    "arroz", 
    "feijão", 
    "macarrão", 
    "leite"
];
---- ou assim ----
const listaMercado = [];
lista[0] = "arroz";
lista[1] = "feijão";
lista[2] = "macarrão";
lista[3] = "leite";

---- ou assim ----
const listaMercado = new Array("arroz", "feijão", "macarrão", "leite");
*/

//Alterar o valor de uma matriz 
const listaMaquiagem = new Array("delineador", "mascara de cilios", "blush", "primer");
listaMaquiagem[1] = "rímel";
//alert(listaMaquiagem[1]);

//para ver todos itens de uma matriz 
// console.log(listaMaquiagem);

/* Diferença de matriz e objeto
const pessoa = ["Sabrina", "Ramos", 30]; //Array
const pessoaObj = {nome:"Sabrina", sobrenome:"Ramos", idade:30}; //Objeto

pessoa[0];
pessoaObj.nome;
*/

//ACRESCENTANDO UM ITEM NA MATRIZ 
const pessoa = ["Sabrina", "Ramos", 30];
pessoa.push("Brasileira");
// console.log(pessoa);

// para saber se a variavel é um array
//alert(Array.isArray(variável));




/* ------ METODOS ARRAY ------ */
const formasGeometricas = ["triângulo", "quadrado", "retângulo", "losângo"];
// document.getElementById("teste").innerHTML = formasGeometricas;

/* 
---- METODO -> JOIN ----
Especifica uma string para separar cada par de elementos adjacentes da matriz.O separador é convertido em uma string, se necessário.Se omitido, os elementos da matriz são separados por uma vírgula(",").Se separatorfor uma string vazia, todos os elementos serão unidos sem nenhum caractere entre eles.

EXEMPLOS:
document.getElementById("teste").innerHTML = formasGeometricas.join(" * ");
document.getElementById("teste").innerHTML = formasGeometricas.join(" - ");
document.getElementById("teste").innerHTML = formasGeometricas.join(" ~ ");
*/

/* 
---- METODO -> POP ----
O pop()método remove o último elemento de uma matriz e retorna esse valor para o chamador. Se você chamar pop()um array vazio, ele retornará undefined.

EXEMPLO:
formasGeometricas.pop();
document.getElementById("teste").innerHTML = formasGeometricas;
*/

/* 
---- METODO -> PUSH ----
O push()método acrescenta valores a uma matriz.

EXEMPLO:
formasGeometricas.push("círculo");
document.getElementById("teste").innerHTML = formasGeometricas;
*/

/* 
---- METODO -> SHIFT ----
O shift()método remove o elemento no índice zero e desloca os valores em índices consecutivos para baixo e, em seguida, retorna o valor removido. Se a lengthpropriedade for 0, undefinedé retornado.

EXEMPLO:
formasGeometricas.shift();
document.getElementById("teste").innerHTML = formasGeometricas;
*/

/* 
---- METODO -> UNSHIFT ----
O unshift()método insere os valores fornecidos no início de um objeto do tipo array.

EXEMPLO:
formasGeometricas.unshift("pentágono");
document.getElementById("teste").innerHTML = formasGeometricas;
*/

/* 
---- METODO -> SPLICE ----
O splice()método é um método mutante . Pode alterar o conteúdo de this. Se o número especificado de elementos a serem inseridos for diferente do número de elementos que estão sendo removidos, os arrays lengthtambém serão alterados. 

EXEMPLO:
formasGeometricas.splice(1, 0, "pentágono", "círculo");
document.getElementById("teste").innerHTML = formasGeometricas;
*/

/* 
---- METODO -> CONCAT ----
Matrizes e / ou valores a serem concatenados em uma nova matriz.Se todos os valueNparâmetros forem omitidos, concatretornará uma cópia superficial do array existente no qual é chamado.

EXEMPLO:
const coresPrimarias = ["amarelo", "vermelho", "verde", "azul"];
const coresSecundarias = ["rosa", "roxo", "laranja"];
const maisCores = ["marrom"];
const coresMistas = coresPrimarias.concat(coresSecundarias, maisCores);

document.getElementById("teste").innerHTML = coresMistas;
*/

/* 
---- METODO -> SLICE ----
O slice()método é um método de cópia. Uma nova matriz contendo os elementos extraídos.

EXEMPLO:
const jogadores = ["Neymar", "Messi", "CR7", "Cassio", "fagner", "Gabgol", "Dudu"]
const craques = jogadores.slice(0,3);

document.getElementById("teste").innerHTML = craques;
*/

/* 
---- METODO -> SORT ----
O sort()método ordena os elementos de um array no local e retorna a referência ao mesmo array, agora ordenado.

EXEMPLOS:
const jogadores = ["Neymar", "Messi", "CR7", "Cassio", "Fagner", "Gabgol", "Dudu"]
jogadores.sort();
document.getElementById("teste").innerHTML = jogadores;
----------------------------------------------------------------------------------------
const numeros = [40, 100, 1, 5, 25, 10];
numeros.sort(function (a, b) { return a - b });
document.getElementById("teste").innerHTML = numeros;
*/

/* 
---- METODO -> REVERSE ----
O reverse()método inverte uma matriz no lugar e retorna a referência à mesma matriz, o primeiro elemento da matriz agora se tornando o último e o último elemento da matriz se tornando o primeiro. Em outras palavras, a ordem dos elementos no array será voltada para a direção oposta à indicada anteriormente.

EXEMPLOS:
const jogadores = ["Neymar", "Messi", "CR7", "Cassio", "Fagner", "Gabgol", "Dudu"]
jogadores.sort();
jogadores.reverse();
document.getElementById("teste").innerHTML = jogadores;
----------------------------------------------------------------------------------------
const numeros = [40, 100, 1, 5, 25, 10];
numeros.sort(function (a, b) { return b - a });
document.getElementById("teste").innerHTML = numeros;
*/

/* 
---- PEGAR O MAIOR NUMERO DA MATRIZ ----
const numeros = [40, 100, 1, 5, 25, 10];

function maiorNumero(array){
    return Math.max.apply(null, array);
}

document.getElementById("teste").innerHTML = maiorNumero(numeros);
*/

/* 
---- PEGAR O MENOR NUMERO DA MATRIZ ----
const numeros = [40, 100, 1, 5, 25, 10];

function menorNumero(array){
    return Math.min.apply(null, array);
}

document.getElementById("teste").innerHTML = menorNumero(numeros);
*/

/* 
---- FILTRAGEM DE NUMEROS ----
const numeros = [40, 100, 1, 5, 25, 10];
const numeroMaior20 = numeros.filter(filtragem);

function filtragem(value, index, array) {
    return value > 20;
}


document.getElementById("teste").innerHTML = numeroMaior20;
*/

