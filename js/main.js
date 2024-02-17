$(document).ready(function() {
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');
    $('#telefone').mask('(00) 00000-0000');

    $("#form-cadastro").on('submit', function(e){
        e.preventDefault()
    })

    $("#form-cadastro").validate({
        rules: {
            nome: {
                required:true,
            },
            email: {
                required:true,
                email:true
            },
            telefone: "required",
            cpf: "required",
            endereço: "required",
            cep: "required"
        },
        messages: {
            nome: 'insira o seu nome',
            email: 'insira um email válido',
            telefone:'insira um número válido',
            cpf:'insira o seu CPF corretamente',
            endereço: 'insira um endereço válido',
            cep:'insira um CEP válido'
        },

        submitHandler: function(form) {
            form.submit();
        }
    })
})