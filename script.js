// Pega o elemento modal
var modal = document.getElementById("modalImagens");

// Pega a imagem dentro do modal
var modalImg = document.getElementById("imagemAmpliada");

// Pega o elemento para a descrição (caption)
var captionText = document.getElementById("descricaoModal");

/**
 * Função para abrir o modal
 * @param {string} src - O caminho da imagem que será exibida.
 * @param {string} alt - O texto da descrição/título do produto.
 */
function abrirModal(src, alt) {
  modal.style.display = "block"; // Torna o modal visível
  modalImg.src = src; // Define a fonte da imagem ampliada
  captionText.innerHTML = alt; // Define o texto da descrição
}

/**
 * Função para fechar o modal (quando o 'x' é clicado)
 */
function fecharModal() {
  modal.style.display = "none"; // Esconde o modal
}

// Fechar o modal clicando em qualquer lugar fora da imagem
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}