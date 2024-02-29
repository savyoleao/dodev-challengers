class Carro {
   Marca;
   Modelo;
   Categoria;
   Ano;
   Quilometragem;
   Valor;

   constructor(marca, modelo, categoria, ano, quilometragem, valor){
      this.Marca = marca;
      this.Modelo = modelo;
      this.Categoria = categoria
      this.Ano = ano;
      this.Quilometragem = quilometragem;
      this.Valor = valor;
   }
}

const url = 'https://apigenerator.dronahq.com/api/WOPjYWyA/carros'

async function Get() {
   const response = await fetch(url);
   const data = await response.json();
   return console.log(data);
}

async function postData(data = {}) {

   const response = await fetch(url, {
 
     method: 'POST', // *GET, POST, PUT, DELETE, etc.
 
     mode: 'cors',
 
     cache: 'no-cache',
 
     credentials: 'same-origin',
 
     headers: {
        'Content-Type': 'application/json'
     },
 
     redirect: 'follow',
 
     referrerPolicy: 'no-referrer',
 
     body: JSON.stringify(data)
 
   });
 
   return response.json();
 
 }

 async function putData(data = {}) {

   const response = await fetch(url, {
 
     method: 'PUT', // *GET, POST, PUT, DELETE, etc.
 
     mode: 'cors',
 
     cache: 'no-cache',
 
     credentials: 'same-origin',
 
     headers: {
        'Content-Type': 'application/json'
     },
 
     redirect: 'follow',
 
     referrerPolicy: 'no-referrer',
 
     body: JSON.stringify(data)
 
   });
 
   return response.json();
 
 }

 async function deleteData(id) {

   const response = await fetch(`${url}/${id}`, {
 
     method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
   });
 
   return response.json();
 
 }

 const carroNovo = new Carro('Toyota', 'TCross', 'SUV', 2020, 0, 200000)


 deleteData(4)
   .then((data) => {
 
     console.log(data);  
 
 });