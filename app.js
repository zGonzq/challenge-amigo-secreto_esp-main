// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [ ];

let nombre = document.getElementById('amigo');

function agregarAmigo(){
    let nombreAmigo = nombre.value
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(nombreAmigo);
        console.log(amigos);
        nombre.value = "";
        mostrarAmigos();
    }
}

function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = amigoSorteado;
}