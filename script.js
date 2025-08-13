// Lista inicial de mudança
const listaInicial = [
    // Cozinha
    "Pratos",
    "Copos",
    "Talheres",
    "Panelas",
    "Frigideira",
    "Panos de prato",
    "Esponja",
    "Detergente",
    "Lixeira de pia",
    "Potes plásticos",
    
    // Limpeza
    "Vassoura",
    "Rodo",
    "Pá de lixo",
    "Balde",
    "Desinfetante",
    "Água sanitária",
    "Sabão em pó",
    "Amaciante",
    "Panos de chão",
    
    // Quarto
    "Lençol casal",
    "Fronhas",
    "Travesseiros",
    "Cobertor",
    "Cabides",
    
    // Banheiro
    "Toalha de banho",
    "Toalha de rosto",
    "Papel higiênico",
    "Sabonete",
    "Shampoo",
    "Condicionador",
    "Escova de dentes",
    "Pasta de dente",
    "Tapete de banheiro"
];

function adicionarItem(nome) {
    const input = document.getElementById('itemInput');
    const lista = document.getElementById('lista');

    const valor = nome || input.value;

    if (valor.trim() === '') return;

    const li = document.createElement('li');
    li.textContent = valor;

    li.addEventListener('click', () => {
        li.classList.toggle('comprado');
    });

    const btnRemover = document.createElement('button');
    btnRemover.textContent = "❌";
    btnRemover.style.marginLeft = "10px";
    btnRemover.onclick = () => li.remove();

    li.appendChild(btnRemover);
    lista.appendChild(li);

    if (!nome) input.value = '';
}

// Adiciona lista inicial
window.onload = () => {
    listaInicial.forEach(item => adicionarItem(item));
};
