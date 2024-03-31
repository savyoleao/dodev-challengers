
const address = document.querySelector('#address'); 
const addressDiv = document.querySelector('#addressDiv');
address.addEventListener('focus', () => {
   addressDiv.style.border = "solid purple 1px";
});
address.addEventListener('blur', () => {
   addressDiv.style.border = "";
   console.log(address.value);
});

const nameStore = document.querySelector('#nameStore'); 
const nameDiv = document.querySelector('#nameDiv');
nameStore.addEventListener('focus', () => {
   nameDiv.style.border = "solid purple 1px";
});
nameStore.addEventListener('blur', () => {
   nameDiv.style.border = "";
   console.log(nameStore.value);
});

const openHour = document.querySelector('#openHour'); 
const openHourDiv = document.querySelector('#openHourDiv');
openHour.addEventListener('focus', () => {
   openHour.style.borderColor = "purple";
});
openHour.addEventListener('blur', () => {
   console.log(openHour.value);
});

const closeHour = document.querySelector('#closeHour'); 
closeHour.addEventListener('focus', () => {
   closeHour.style.borderColor = "purple";
});
closeHour.addEventListener('blur', () => {
   console.log(closeHour.value);
});

const submit = document.querySelector('#submit');
submit.addEventListener('click', async (event) => {
   event.preventDefault();
   console.log('preparando envio...');

   const data = {
      name: nameStore.value,
      address: address.value,
      openHour: openHour.value,
      closeHour: closeHour.value
   };
   try {
      await fetch('https://api.flit.com.br/submeterDados', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
      });
   } catch (error) {
      console.log('concluido');//vai dar erro de todo jeito, so pra saber se deu certo
   }
});