/* Vamos entender Operadores:
-> Os operadores JS são usados para atribuir valores, comparar valores, executar operações aritméticas e muito mais.

São os sinais que usamos: + - * / = ++ -- += -= && || etc...

São separados em 6 "categorias":

1)  Operadores Aritméticos (matemáticos)

var valor1, valor2, total;
valor1 = 5;
valor2 = 2;

total = valor1 + valor2;
total = valor1 - valor2;
total = valor1 * valor2;
total = valor1 / valor2;
total = ++valor1; 
total = --valor1;

alert(total);

2)  Operadores de Atribuição

var valor1, valor2, total;
valor1 = 5;
valor2 = 2;

valor1 = valor1 + valor2;
valor1 += valor2; //mesmo tipo de operação

valor1 = valor1 - valor2;
valor1 -= valor2; //mesmo tipo de operação

valor1 = valor1 * valor2;
valor1 *= valor2; //mesmo tipo de operação

valor1 = valor1 / valor2;
valor1 /= valor2; //mesmo tipo de operação

3)  Operadores de Sequência

var valor1, valor2, total;
valor1 = "Sabrina";
valor2 = "Ramos";

total = valor1 + valor2;
alert(total);

4)  Operadores de Comparação

//  == --> igual a 
//  === --> igual a valor e tipo
//  != --> diferente
//  !== --> diferente de valor e tipo
//  > --> maior que
//  < --> menor que
//  >= --> maior ou igual a 
//  <= --> menor ou igual a 

//(==)
var valor1, valor2, total;
valor1 = 8;
valor2 = 10;

total = (valor1 == valor2); //true(verdadeiro) ou false(falso)
alert(total);

var valor1, valor2, total;
valor1 = 8;
valor2 = "8";

total = (valor1 == valor2); //true(verdadeiro) ou false(falso)
alert(total);


//(===)
var valor1, valor2, total;
valor1 = 8;
valor2 = "8";

total = (valor1 === valor2); //true(verdadeiro) ou false(falso)
alert(total);


// (!=)
var valor1, valor2, total;
valor1 = 8;
valor2 = 12;

total = (valor1 != valor2); //true(verdadeiro) ou false(falso)
alert(total);


//(!==)
var valor1, valor2, total;
valor1 = 8;
valor2 = 12;

total = (valor1 !== "8"); //true(verdadeiro) ou false(falso)
alert(total);


//(<)
var valor1, valor2, total;
valor1 = 8;
valor2 = 12;

total = (valor1 < 4); //true(verdadeiro) ou false(falso)
alert(total);


//(>)
var valor1, valor2, total;
valor1 = 8;
valor2 = 12;

total = (valor1 > 4); //true(verdadeiro) ou false(falso)
alert(total);


//(<=)
var valor1, valor2, total;
valor1 = 8;
valor2 = 12;

total = (valor1 <= 8); //true(verdadeiro) ou false(falso)
alert(total);


//(>=)
var valor1, valor2, total;
valor1 = 8;
valor2 = 12;

total = (valor1 <= 9); //true(verdadeiro) ou false(falso)
alert(total);

5)  Operador Condicional (Ternário)

//  ? --> operador ternário

var idade, eleitor;
idade = 16;
eleitor = (idade < 16) ? "Não eleitor.":"Sim, eleitor.";

alert('A resposta é: ' + eleitor + ' A idade dele é de: ' + idade);

6)  Operadores Lógicos

// && --> e
// || --> ou
// ! --> negação


//(&&)
var idade, eleitor, resultado;
idade = 65;
eleitor = (idade < 16) ? "Não eleitor.":"Sim, eleitor.";

resultado = (idade > 60 && idade < 70); //true //false

alert(resultado);


//(||)
var idade, eleitor, resultado;
idade = 65;
eleitor = (idade < 16) ? "Não eleitor.":"Sim, eleitor.";

resultado = (idade === 65 || idade === 72); //true //false

alert(resultado);


//(!)
var idade, eleitor, resultado;
idade = 71;
eleitor = (idade < 16) ? "Não eleitor.":"Sim, eleitor.";

resultado = !(idade === 65); //true //false

alert(resultado);

*/













