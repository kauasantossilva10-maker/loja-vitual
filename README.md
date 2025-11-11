/* ... (Seu CSS anterior) ... */

/* Novo: Estilo para que a imagem do produto pareça clicável */
.imagem-produto {
    cursor: pointer;
}


/* --- Estilos do Modal (Pop-up) --- */

/* O Modal (Fundo escuro da tela toda) */
.modal {
    display: none; /* Escondido por padrão */
    position: fixed; /* Fixado na tela */
    z-index: 1000; /* Fica por cima de tudo */
    padding-top: 60px; /* Posição do conteúdo */
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto; /* Permite rolagem se o conteúdo for grande */
    background-color: rgb(0,0,0); /* Cor preta com opacidade */
    background-color: rgba(0,0,0,0.9); /* Cor preta com mais opacidade */
}

/* Conteúdo do Modal (A caixa central) */
.modal-conteudo {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
}

/* A Imagem Ampliada dentro do Modal */
.modal-imagem {
    margin: auto;
    display: block;
    width: 100%;
    height: auto;
    border-radius: 8px;
}

/* Descrição da Imagem */
.descricao {
    margin: 10px 0;
    text-align: center;
    color: #ccc;
    padding: 10px 0;
    height: 150px; /* Espaço para a descrição */
}

/* Botão de Fechar (o 'x') */
.fechar {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
}

.fechar:hover,
.fechar:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
}

/* Animação (opcional) */
.modal-conteudo, #descricaoModal {
    -webkit-animation-name: zoom;
    -webkit-animation-duration: 0.6s;
    animation-name: zoom;
    animation-duration: 0.6s;
}

@-webkit-keyframes zoom {
    from {-webkit-transform:scale(0)} 
    to {-webkit-transform:scale(1)}
}

@keyframes zoom {
    from {transform:scale(0)} 
    to {transform:scale(1)}
}