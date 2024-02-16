$(document).ready(function() {

    $('#form-tarefa').on('submit', function(e) {
        e.preventDefault();
        const tarefa = `<li>${$('#input-tarefa').val()}</li>`
        $(tarefa).appendTo('#lista-tarefa')
        $('#input-tarefa').val("")
    })

    $('ul').delegate('li', 'click', function(e) {
        this.classList.add("tarefa-feita")
    })
})