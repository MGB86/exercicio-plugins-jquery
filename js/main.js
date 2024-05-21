$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').validate({
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira o seu E-mail',
            telefone: 'Por favor, insira o seu telefone',
            cpf: 'Por favor, insira o seu CPF',
            endereco: 'Por favor, insira o seu endereço',
            cep: 'Por favor, insira o seu nome',
        }
    })
})