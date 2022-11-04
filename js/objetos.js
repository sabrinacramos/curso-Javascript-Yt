/* OBJETOS
Objetos são basicamente variáveis com muitos valores dentro.

Ex: const carro = {marca:"ford", modelo:"ka", ano: 2015}

Os valores dentro de um objeto são chamados propriedades.

Objetos também podem ter métodos. Um método é uma função colocadas dentro de uma propriedade.

*/

const carro = {
    marca:"ford", 
    modelo:"ka", 
    ano:"2015", 
    placa:"ABC-1234",
    buzina: function() { alert('Biiiiiiiiiiiiiiii') },
    completo: function() {
        // this para se referênciar ao objeto carro
        return "A marca é " + this.marca + " e o modelo é: " + this.modelo;
    }
};

// para chamar uma propriedade
console.log(carro);
console.log(carro.modelo);
console.log(carro["placa"]);

// // para chamar um método
carro.buzina();
console.log(carro.completo());


