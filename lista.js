const lista = document.getElementById('minhaLista');

// Função pra salvar no LocalStorage
function salvarLista() {
  const itens = [];
  lista.querySelectorAll('li').forEach(li => {
    const checkbox = li.querySelector('input[type="checkbox"]');
    const span = li.querySelector('span');
    const texto = span.innerText;
    const comprado = checkbox.checked;
    itens.push({ texto, comprado });
  });
  localStorage.setItem('minhaLista', JSON.stringify(itens));
}

// Função pra carregar do LocalStorage
function carregarLista() {
  const dados = JSON.parse(localStorage.getItem('minhaLista'));
  if (dados) {
    lista.innerHTML = '';
    dados.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `
        <input type="checkbox" ${item.comprado ? 'checked' : ''}>
        <span>${item.texto}</span>
      `;
      if (item.comprado) {
        li.querySelector('span').style.textDecoration = 'line-through';
      }
      lista.appendChild(li);
    });
  }
}

// Função para atualizar riscado ao clicar
function atualizarRiscado(e) {
  if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
    const span = e.target.nextElementSibling;
    if (e.target.checked) {
      span.style.textDecoration = 'line-through';
    } else {
      span.style.textDecoration = 'none';
    }
    salvarLista();
  }
}

// Eventos
lista.addEventListener('change', atualizarRiscado);
window.addEventListener('load', carregarLista);
