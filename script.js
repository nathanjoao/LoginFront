document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.getElementsByClassName('box');
    const inputs = document.getElementsByTagName('input');

    for(let i = 0; i < inputs.length; i++){
        inputs[i].style.height = '40px';
        inputs[i].style.width = '30rem'
        inputs[i].style.borderRadius = '6px'
    }

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.display = 'flex';
        boxes[i].style.flexDirection = 'column';
        boxes[i].style.gap = '5px';
        boxes[i].style.justifyItems = 'center';
    }

    const sendButton = document.getElementById('sendButton');  // Botão de envio
    const emailInput = document.getElementById('email');
    const nomeInput = document.getElementById('nome');
    const senhaInput = document.getElementById('senha');

    // Atribui o evento de clique ao botão "Enviar"
    sendButton.addEventListener('click', (event) => {
        event.preventDefault(); // Impede o comportamento padrão do formulário, caso exista

        // Coleta os valores dos campos de entrada
        const email = emailInput.value;
        const nome = nomeInput.value;
        const senha = senhaInput.value;

        // Exibe os valores no console (substitua isso por envio para servidor se necessário)
        console.log("Email:", email);
        console.log("Nome:", nome);
        console.log("Senha:", senha);

       
    });
});
