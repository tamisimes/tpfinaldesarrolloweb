const completarElFormulario = document.querySelector('#completarElFormulario')

completarElFormulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const message = document.querySelector('#message').value

    const usuario = JSON.parse(localStorage.getItem('usuario')) || []

    const usuarioQueYaEscribio = usuario.find(usuarioNuevo => usuarioNuevo.email === email)
    const alertaModificandoElDom = document.getElementById('mensajeModificandoElDom')

    if (usuarioQueYaEscribio) {
        MensajeAlerta(alertaModificandoElDom, "Ups! It seems that you've already completed this form", 'error');
        return
    }

    usuario.push({ name: name, email: email, message: message })

    localStorage.setItem('usuario', JSON.stringify(usuario))

    MensajeAlerta(alertaModificandoElDom, 'Thank you for contacting me!')
});

function MensajeAlerta(container, message, type) {
    const mensajeDelDiv = document.createElement('div')
    mensajeDelDiv.textContent = message

    if (type) {
        mensajeDelDiv.classList.add(type)
    }

    container.innerHTML = ''
    container.appendChild(mensajeDelDiv)

    setTimeout(() => {
        container.innerHTML = ''
    }, 4500)
}