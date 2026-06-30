// ==========================================
// FORMULÁRIO DE CONTATO
// ==========================================

const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(nome === ""){
        alert("Digite seu nome.");
        return;
    }

    if(email === ""){
        alert("Digite seu e-mail.");
        return;
    }

    if(!emailValido.test(email)){
        alert("Digite um e-mail válido.");
        return;
    }

    if(mensagem === ""){
        alert("Digite uma mensagem.");
        return;
    }

    alert("Mensagem enviada com sucesso!");

    formulario.reset();

})



// ==========================================
// TEMA CLARO / ESCURO
// ==========================================

const botaoTema = document.getElementById("tema");

botaoTema.addEventListener("click", function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        botaoTema.innerHTML = "☀️";

    }else{

        botaoTema.innerHTML = "🌙";

    }

});