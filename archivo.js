const completarElFormulario = document.querySelector('#completarElFormulario')

completarElFormulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const message = document.querySelector('#message').value

    const usuario = JSON.parse(localStorage.getItem('usuario')) || []

    const usuarioQueYaEscribio = usuario.find(usuarioNuevo => usuarioNuevo.email === email)

    if (usuarioQueYaEscribio) {
        return alert("Ups! It seems that you've already completed this form")
    }

    usuario.push({ name: name, email: email, message: message })

    localStorage.setItem('usuario', JSON.stringify(usuario))

    alert("Thank you for contacting me!")
}) 