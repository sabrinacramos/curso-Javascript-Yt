/* SWITCH
É usado para realisar diferentes ações com base em diferentes condições no mesmo bloco de verificação. Caso a condição não seja compatível não será executada e o valor padrão será acionado. 
*/
/*
switch (expressao){
    case a:
        // o que acontece
        break;
    case b:
        // o que acontece
        break;
    case c:
        // o que acontece
        break;
    default:
}
*/

// Exemplos --- 1 ---
// function verificaCor() {
//     let cor = document.getElementById("cor").value;
//     cor = cor.toLowerCase();

//     switch (cor) {
//         case "azul":
//             document.body.style.backgroundColor = "blue";
//             break;
//         case "vermelho":
//             document.body.style.backgroundColor = "red";
//             break;
//         case "verde":
//             document.body.style.backgroundColor = "green";
//             break;
//         default:
//         document.getElementById("teste").innerHTML = "Nenhuma cor disponível para: " +cor;
//     }
// }

// Exemplos --- 2 ---
function diaDaSemana() {
    var dia = new Date().getDay();

    console.log(dia);

    switch (dia) {
        case 0:
            document.getElementById("teste").innerHTML = "Hoje é Domingo!";
            break;
        case 1:
            document.getElementById("teste").innerHTML = "Hoje é Segunda!";
            break;
        case 2:
            document.getElementById("teste").innerHTML = "Hoje é Terça!";
            break;
        case 3:
            document.getElementById("teste").innerHTML = "Hoje é Quarta!";
            break;
        case 4:
            document.getElementById("teste").innerHTML = "Hoje é Quinta!";
            break;
        case 5:
            document.getElementById("teste").innerHTML = "Hoje é Sexta!";
            break;
        case 6:
            document.getElementById("teste").innerHTML = "Hoje é Sábado!";
            break;
        default:
            document.getElementById("teste").innerHTML = "Não sei que dia é ...";
    }
}
