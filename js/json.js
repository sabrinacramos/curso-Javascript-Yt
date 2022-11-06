/* ---- JSON ----

JSON significa JavaScript Object Notation (notação de objeto JavaScript).

Explicando de um modo simples JSON é basicamente uma forma de converter um objeto em texto e o contrário também, um texto em um objeto.

Ele é usado principalmente para transmitir dados entre sistemas de forma simples, ja que no formato de texto é lido por praticamente toda linguagem de programação.

Para trabalhar com JSON no JavaScript usamos dois métodos:

JSON.parse() -> Converte textos no padrão JSON em objetos.
JSON.stringify() -> Converte objetos em texto padrão JSON. 

*/

/* ---- Exemplo de como funciona ----*/
// OBJETO CARRO
const carro = {
    marca: "Fiat",
    modelo: "uno",
    motor: ["1.6", "1.4", "1.0"]
}

// CONVERTEU PARA TEXTO JSON
let texto = JSON.stringify(carro);

// COLOCOU O TEXTO NO HTML
// document.getElementById('area').innerHTML = texto;

// CONVERTEMOS TEXTO EM OBJETO 
let obj = JSON.parse(texto);

// PEGAMOS UM VALOR DESTE OBJETO
// console.log(obj.motor[2]);

/* ---- Exemplo prático 1 ----*/
// const ajax = new XMLHttpRequest();
// ajax.open('GET', 'https://viacep.com.br/ws/01001000/json/');
// ajax.send();

// ajax.onload = function () {
//     document.getElementById('area').innerHTML = this.responseText;
//     let obj = JSON.parse(this.responseText);
//     alert(obj.ddd);
// }

/* ---- Exemplo prático 2 ----*/
function buscarCEP() {
    let input = document.getElementById('cep').value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');
    ajax.send();

    ajax.onload = function () {
        //document.getElementById('texto').innerHTML = this.responseText;

        // TRANSFORMEI O TEXTO EM OBJETO 
        let obj = JSON.parse(this.responseText);

        // PEGUEI O VALORES QUE EU QUERIA
        let logradouro = obj.logradouro;
        let cidade = obj.localidade;
        let estado = obj.uf;

        document.getElementById('texto').innerHTML = "Logradouro: " + logradouro + "<br> Cidade: " + cidade + "<br> Estado: " + estado;
    }
}

