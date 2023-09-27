// Creo una variable y la selecciono
const btnEnviar = document.querySelector('#botonEnviar')
// En la variable creada creo un evento de escucha, que en este caso es el click, y que haga la funcion enviar
btnEnviar.addEventListener('click', enviar)


// Creo uno funcion llamada enviar
function enviar(event){
    event.preventDefault()

    // Selecciono en las variable los inputs
    const name = document.querySelector('#nombre')
    const surnameUno = document.querySelector('#ap1')
    const surnameDos = document.querySelector('#ap2')
    const dni = document.querySelector('#dni')
    const foto = document.querySelector('#imagen')

    // Cojo el valor de los inputs
    const nom = name.value
    const apellidoUno = surnameUno.value
    const apellidoDos = surnameDos.value
    const id = dni.value
    const fotodni = foto.value
    

    // Selecciono los ids de los span
    const nombreFinal = document.querySelector('#nombreFinal')
    const apellidosCompleto = document.querySelector('#apellidosFinal')
    const dniFinal = document.querySelector('#dniFinal')
    const imagenFinal = document.querySelector('img').setAttribute('src', fotodni)

    nombreFinal.innerHTML = nom + ` `
    apellidosCompleto.innerHTML = apellidoUno + ` ` + apellidoDos
    dniFinal.innerHTML = id
    imagenFinal.innerHTML = fotodni
}