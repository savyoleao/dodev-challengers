let nomes = [];
let notas = [];
let condicao = true
let contador = 0

while (condicao){
   let pedirNome = prompt('qual o seu nome?');
   nomes[contador] = pedirNome;
   let pedirNota = Number(prompt('Qual foi a nota da prova? (0 a 10)'));
   notas[contador] = pedirNota;
   contador++

   let parar = prompt('Deseja inserir outro aluno e outra nota? s/n')
   if(parar != 's'){
      condicao = false
   }

}

console.log('Notas dos alunos: ')
for(let i = 0; i < nomes.length; i++){
   console.log(`Aluno ${nomes[i]}: ${notas[i]}`)
}

let somaNotas = 0
console.log('Soma geral: ')
for(let i = 0; i < notas.length; i++){
   somaNotas += notas[i];
}
console.log(somaNotas)