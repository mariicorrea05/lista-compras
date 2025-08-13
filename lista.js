const lista = document.getElementById('minhaLista');
const inputNovo = document.getElementById('novoItem'); 
const botaoAdicionar = document.getElementById('adicionarItem'); 

// Lista inicial de compras
const listaInicial = [
  { texto: 'Arroz', comprado: false },
  { texto: 'Macarrão', comprado: false },
  { texto: 'Tomate', comprado: false },
  { texto: 'Salame', comprado: false },
  { texto: 'Azeitona', comprado: false }
];

// Salvar lista no LocalStorage
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

// Criar um item da lista
function criarItem(texto, comprado = false) {
  const li = document.createElement('li');
  li.innerHTML = `
    <input type="checkbox" ${comprado ? 'checked' : ''}>
    <span>${texto}</span>
    <button class="remover">❌</button>
  `;
  if (comprado) {
    li.querySelector('span').style.textDecoration = 'line-through';
  }
  return li;
}

// Carregar lista do LocalStorage ou lista inicial
function carregarLista() {
  const dados = JSON.parse(localStorage.getItem('minhaLista'));
  lista.innerHTML = '';

  if (dados && dados.length > 0) {
    dados.forEach(item => {
      const li = criarItem(item.texto, item.comprado);
      lista.appendChild(li);
    });
  } else {
    listaInicial.forEach(item => {
      const li = criarItem(item.texto, item.comprado);
      lista.appendChild(li);
    });
    salvarLista(); // Salva a lista inicial no LocalStorage
  }
}

// Adicionar novo item
function adicionarItem() {
  const texto = inputNovo.value.trim();
  if (texto === '') return;
  const li = criarItem(texto);
  lista.appendChild(li);
  inputNovo.value = '';
  salvarLista();
}

// Atualizar riscado ao marcar/desmarcar e remover item
function atualizarLista(e) {
  if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
    const span = e.target.nextElementSibling;
    span.style.textDecoration = e.target.checked ? 'line-through' : 'none';
    salvarLista();
  }

  if (e.target.classList.contains('remover')) {
    e.target.parentElement.remove();
    salvarLista();
  }
}

// Eventos
window
