function save(text){
   window.sessionStorage.setItem('nome', text)//salvar informações para não perde-las se atualizar a page (id, value)
};

const input = document.querySelector('#nameText')
input.addEventListener('blur', (event) => {
   save(event.target.value)
}); //ao desfocar do input ele salva o texto do mesmo