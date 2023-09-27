// JS EJERCICIO 2
const btnEnviar = document.querySelector('#botonEnviar')
btnEnviar.addEventListener('click', enviar)

const bd = []
function enviar(event){
    event.preventDefault()

    const name = document.querySelector('#nombre')
    const surnameUno = document.querySelector('#ap1')
    const surnameDos = document.querySelector('#ap2')
    const dni = document.querySelector('#dni')
    const foto = document.querySelector('#imagen')

    const nom = name.value
    const apellidoUno = surnameUno.value
    const apellidoDos = surnameDos.value
    const id = dni.value
    const fotodni = foto.value
    document.querySelector('img').setAttribute('src', fotodni)
    
    const nombreFinal = document.querySelector('#nombreFinal')
    const apellidosCompleto = document.querySelector('#apellidosFinal')
    const dniFinal = document.querySelector('#dniFinal')

    nombreFinal.innerHTML = nom + ` `
    apellidosCompleto.innerHTML = apellidoUno + ` ` + apellidoDos
    dniFinal.innerHTML = id


    const usuario = {
        fotodni,
        nom,
        apellidoUno,
        apellidoDos,
        id,
    }
    bd.push(usuario)

    let tabla = ``
    bd.forEach((element, index) => {
        tabla += `<tr><td>${index+1}</td><td><img width="30" src="${element.fotodni}"></td><td>${element.nom}</td><td>${element.apellidoUno + " " + element.apellidoDos}</td><td>${element.id}</td></tr>`
    });
    document.querySelector('#meteLineas').innerHTML = tabla
}