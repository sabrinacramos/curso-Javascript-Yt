/* MANIPULAR DATAS EM jAVASCRIPT*/

// COMANDO BASE PARA PEGAR A DATA
let data = new Date();
// console.log(data);

// PEGAR O ANO ATUAL COM 4 DIGITOS
let ano = data.getFullYear();
console.log(ano);

// PEGAR O MÊS ATUAL - DE 0 ATÉ 11 SENDO 0 JANEIRO E 11 DEZEMBRO
let mes = data.getMonth();
// console.log(mes);

// MOSTRAR O MÊS NO FORMATO ESCRITO
const mesesAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let mesEscrito = mesesAno[data.getMonth()];
console.log(mesEscrito);

// PEGAR DIA DO MÊS - 1 ATÉ 31
let diaMes = data.getDate();
console.log(diaMes);

// PEGAR O DIA DA SEMANA - 0 ATÉ 6
let diaSemana = data.getDay();
// console.log(diaSemana);

// MOSTRAR O DIA DA SEMANA NO FORMATO ESCRITO
const diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
let diasSemanaEscrito = diasDaSemana[data.getDay()];
console.log(diasSemanaEscrito);

//PEGAR A HORA - DE 0 ATÉ 23
let hora = data.getHours();
console.log(hora);

//PEGAR MINUTOS - DE 0 ATÉ 59
let minutos = data.getMinutes();
console.log(minutos);

//PEGAR SEGUNDOS - DE 0 ATÉ 59
let segundos = data.getSeconds();
console.log(segundos);

//PEGAR MILISEGUNDOS - DE 0 ATÉ 999
let miliSegundos = data.getMilliseconds();
console.log(miliSegundos);

// PEGAR A DATA NO PADRÃO BRASILEIRO - DIA / MES /ANO
let dataBR = data.toLocaleString('pt-BR');
let dataBR2 = data.toLocaleString('pt-BR', { dateStyle: 'short' });
let dataBR3 = data.toLocaleString('pt-BR', { timeStyle: 'short' });
console.log(dataBR);
console.log(dataBR2);
console.log(dataBR3);

// PEGAR OS VALORES SEPARADOS 
d = new Date();
diaMes = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();

function addZero(x) { return x < 10 ? '0' + x : '' + x; };

let dataPadraoBR = addZero(diaMes) + "/" + addZero(mes) + "/" + ano;
console.log(dataPadraoBR);

//COMPARAR DATAS - MAIOR OU MENOR. EX: VENCIMENTOS 
var hoje = new Date();
var vencimento = new Date(2022, 0, 15);

if (hoje > vencimento) {
    console.log("Sua conta esta vencida!");
} else {
    console.log("Ainda não venceu, tudo certo!");
}

// DIFERENÇA ENTRE DUAS DATAS EM DIAS

var dataInicial = new Date();
var dataFinal = new Date(2022, 11, 31);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));
console.log(diferencaDias + " dias!");
