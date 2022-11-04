/* CLASSES EM JAVASCRIPT

As classes são um conceito antigo em programação e várias linguagens utilizam elas. Mas no Javascript isso é relativamente novo, por isso mesmo programadores experientes não sabem muito bem utilizar.

Basicamente, as classes são como "fábricas" para criar objetos.
Pode-se dizer que são "funções especiais" para a criação de objetos.

Assim como uma fábrica da vida real precisa de maquinas para construir os objetos, as Classes no Javascript usam um método chamado constructor() para fabricar objetos. 

*/

class Carro {
    constructor(valor1, valor2, valor3) {
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina() {
        return this.modelo + " buzinou: Biiiiiiiiiiiiii";
    }
}

const uno = new Carro("fiat", "Uno", 2001);
const gol = new Carro("volkswagen", "Gol", 2013);
console.log(uno.buzina());
console.log(gol.buzina());