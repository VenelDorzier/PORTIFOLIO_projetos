var nomeError = document.getElementById('nome-erro');
var emailError = document.getElementById('email-erro');
var telefoneError = document.getElementById('telefone-erro');
var menssagemError = document.getElementById('menssagem-erro');
var submitError = document.getElementById('submit-erro');


function validarNome() {
var nome = document.getElementById('contato-nome').value;

if(nome.length == 0){
    nomeError.innerHTML = 'Nome required';
    return false;
}

if(!nome.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nomeError.innerHTML = 'Escerva o seu Nome';
    return false;
}

nomeError.innerHTML = '<i class="fas fa-check-circle"></i>';
return true;
}


function validarEmail(){
    var email = document.getElementById('contato-email').value;

if(email.length == 0){
    emailError.innerHTML = 'Email required';
    return false;
}

if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML = 'Email Invalido';
    return false;
}

emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
return true;
}



function validarTelefone() {
    var telefone = document.getElementById('contato-telefone').value;

    if(telefone.length == 0){
        telefoneError.innerHTML = 'telefone required';
        return false;
    }
    
    if(telefone.length !== 11){
        telefoneError.innerHTML = 'numero deve ter 11 digitos';
        return false;
    }
    
   if(!telefone.match(/^[0-9]{11}$/)){
    telefoneError.innerHTML = 'apenas digitos por favor';
    return false;
   }

    telefoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}


function validarMenssagem() {
    var menssagem = document.getElementById('contato-menssagem').value;
    var required = 20;
    var left = required - menssagem.length;

    if(left>0){
        menssagemError.innerHTML = left + ' mais caractares necessarios';
        return false;
    }
    menssagemError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}


function validarForm(){
    if(!validarNome() || !validarEmail() || !validarTelefone() || !validarMenssagem()){
        submitError.innerHTML = 'corrija o campo para enviar';
        submitError.style.display = 'block';
        setTimeout(function(){submitError.style.display = 'none';}, 5000);
        return false
    }     

}

