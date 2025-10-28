let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function atualizarContador() {
    document.getElementById('contador-carrinho').textContent = carrinho.length;
}

function renderizarCarrinho() {
    const lista = document.getElementById('lista-carrinho');
    lista.innerHTML = ''; // Limpa a lista antes de renderizar

    if (carrinho.length === 0) {
        lista.innerHTML = '<li>Seu carrinho está vazio.</li>';
        return;
    }

    let total = 0;
    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        lista.appendChild(li);
        total += item.preco;
    });

    const totalLi = document.createElement('li');
    totalLi.innerHTML = `<strong>Total: R$ ${total.toFixed(2)}</strong>`;
    lista.appendChild(totalLi);
}

function adicionarAoCarrinho(produtoElement) {
    const nome = produtoElement.dataset.nome;
    const preco = parseFloat(produtoElement.dataset.preco);

    const item = { nome, preco };
    carrinho.push(item);
    
    // Salva no armazenamento local (simulação de persistência)
    localStorage.setItem('carrinho', JSON.stringify(carrinho)); 
    
    alert(`${nome} adicionado ao carrinho!`);
    atualizarContador();
    renderizarCarrinho();
}

// Adiciona o evento de clique aos botões
document.addEventListener('DOMContentLoaded', () => {
    const botoes = document.querySelectorAll('.add-carrinho');
    botoes.forEach(button => {
        button.addEventListener('click', (e) => {
            const produtoDiv = e.target.closest('.produto');
            adicionarAoCarrinho(produtoDiv);
        });
    });

    // Inicializa o contador e renderiza o carrinho ao carregar
    atualizarContador();
    renderizarCarrinho();
});