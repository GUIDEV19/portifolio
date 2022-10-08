const form = document.getElementById('form')
const Nome = document.getElementById('Nome')
const email = document.getElementById('email')
const Telefone = document.getElementById('Telefone')
const enviar = document.getElementById('Enviar');


form.addEventListener("submit", (e) =>{
    e.preventDefault();
    checkInputs();
})

function checkInputs() {

    const NomeValue = Nome.value;
    const emailValue = email.value;
    const TelefoneValue = Telefone.value;

    if(NomeValue === ''){
        console.log("esta aqui!")
    } else{
        setSuccessFor(NomeValue)
    }
}



function setSuccessFor (input){
input.setAttribute('class','success')
}

enviar.addEventListener("click", function() {
    console.log('você clicou no bot~cao de envio')
});