let nome = prompt('insira seu nome');
let idade = parseInt(prompt('insira sua idade'));
let peso = parseFloat(prompt('insira seu peso'));
let altura = parseFloat(prompt('insira sua altura'));

let imc = peso / (altura * altura);
let nascimento = 2023 - idade;

console.log(`Olá ${nome}, você tem ${idade} anos, nasceu em ${nascimento}, tem ${altura} de altura, pesa ${peso}kg e seu IMC é ${imc} Kg/m^2`)