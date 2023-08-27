const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  alert(`Obrigado por se registrar, ${nome}! Um e-mail de confirmação foi enviado para ${email}.`);
  formulario.reset();
});

/*JavaScript (script.js):

Seleção do formulário e evento de envio:

const formulario = document.getElementById("formulario");: Seleciona o formulário pelo ID.
formulario.addEventListener("submit", (event) => {...});: Adiciona um ouvinte de evento para o envio do formulário.
Prevenção do envio padrão:

event.preventDefault();: Evita que o formulário seja enviado da maneira padrão (recarregando a página).
Coleta de dados e alerta:

const nome = document.getElementById("nome").value;: Obtém o valor do campo de nome.
const email = document.getElementById("email").value;: Obtém o valor do campo de e-mail.
alert(...): Mostra um alerta com os dados do usuário.
Limpeza do formulário:

formulario.reset();: Limpa os campos do formulário após o envio.
*/
