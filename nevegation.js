const lang = navigator.linguage;
let date = new Date();

let diaNumero = date.getDate();
let mes = date.getMonth();
let diaNome = date.toLocaleDateString(lang, {weekday: 'long'})
let nomeMês = date.toLocaleDateString(lang, {month: 'long'})
let ano = date.getFullYear()

document.getElementById('nomeMês').innerHTML = nomeMês;
document.getElementById('diaNome').innerHTML = diaNome;
document.getElementById('diaNumero').innerHTML = diaNumero;
document.getElementById('ano').innerHTML = ano;