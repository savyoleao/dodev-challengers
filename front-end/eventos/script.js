//eventos
const button = document.querySelector('#submit'); //DOM
button.addEventListener('submit', (event)=>{ //evento do tipo submit
   event.preventDefault(); //prevenir o vento padrão do submit (atualizar a pagina depois que clica)
   alert('recebi o evento');
   console.log(event);
})