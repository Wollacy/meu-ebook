// Função para abrir o pop-up
function abrirModal() {
    document.getElementById("leadModal").style.display = "flex";
}

// Função para fechar o pop-up
function fecharModal() {
    document.getElementById("leadModal").style.display = "none";
}

// Fechar o modal se o usuário clicar fora da caixinha
window.onclick = function(event) {
    let modal = document.getElementById("leadModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Lógica de envio do formulário
document.getElementById("leadForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede a página de recarregar

    // Captura o nome do lead para personalizar a mensagem
    let nome = document.getElementById("nome").value;
    
    // Altera o texto e a cor do botão para dar feedback pro usuário
    let btn = document.querySelector(".submit-button");
    btn.innerHTML = "Obrigado! Baixando...";
    btn.style.backgroundColor = "#10B981"; // Muda para um tom de verde indicando sucesso

    // Simulação rápida antes de iniciar o download
    setTimeout(function() {
        // Mostra a mensagem de sucesso
        alert("Obrigado, " + nome + "! O seu download vai começar agora.");
        
        // Força o download do PDF sem tirar o lead da página
        let link = document.createElement('a');
        link.href = 'guia-git.pdf';
        link.download = 'guia-git.pdf'; // O atributo download força o salvamento
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Fecha o modal e limpa o formulário para o próximo uso
        fecharModal();
        btn.innerHTML = "RECEBER MEU E-BOOK AGORA"; // Reseta o texto do botão
        btn.style.backgroundColor = ""; // Volta a cor original do botão
        document.getElementById("leadForm").reset(); // Limpa os campos digitados
    }, 1000);
});