$(document).ready(function () {
  // Evento de submissão do formulário
  $('#form-tarefas').submit(function (event) {
    event.preventDefault() // Evita que o formulário seja enviado

    // Captura o valor do campo de texto
    const tarefa = $('#nome-tarefa').val().trim()

    // Verifica se a tarefa não está vazia
    if (tarefa !== '') {
      // Adiciona a tarefa como um item <li> na lista
      $('#lista-tarefas').append(`<li>${tarefa}</li>`)

      // Limpa o campo de texto
      $('#nome-tarefa').val('')
    }
  })

  // Evento de clique nos itens da lista
  $('#lista-tarefas').on('click', 'li', function () {
    // Adiciona ou remove a classe 'completed' no item
    $(this).toggleClass('completed')
  })
})
