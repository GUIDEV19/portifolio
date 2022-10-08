
function typeWriter(elemento) {
    const textArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textArray.forEach((letra, i) => {
        setTimeout(function () {
            elemento.innerHTML += letra;
        }, 100 * i);
    });
}




const titulo = document.querySelector('#introducao h1');
const titulo2 = document.querySelector('#introducao h2')
typeWriter(titulo)

