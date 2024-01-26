let numero1 = Number(prompt('insira o valor do primeiro número'));
let numero2 = Number(prompt('insira o valor do segundo número'));
let resultado = prompt('escolha uma opção: somar/subtrair')

switch(resultado) {
   case 'somar':
      let soma = numero1 + numero2
      console.log(`A soma dos dois números equivale a ${soma}`)
      break;
   case 'subtrair':
      let subtracao = numero1 - numero2
      console.log(`A subtração dos dois números equivale a ${subtracao}`)
      break;
   default:
      console.log('Você precisa escolher entre somar ou subtrair, tente novamente')
      break;
}