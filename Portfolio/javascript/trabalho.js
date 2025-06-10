document.addEventListener("DOMContentLoaded", function() {
    const botao = document.createElement("button");
    botao.textContent = "Clique aqui para uma mensagem!";
    document.body.appendChild(botao);

    botao.addEventListener("click", function() {
        alert("Bem-vindo ao meu portfólio!");
    });
});
