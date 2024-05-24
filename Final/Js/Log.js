document.getElementById('signUp').addEventListener('click', () => {
    document.querySelector('.container').classList.add('right-panel-active');
});

document.getElementById('signIn').addEventListener('click', () => {
    document.querySelector('.container').classList.remove('right-panel-active');
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;

    // Simulación de verificación de credenciales
    if (username === 'usuario' && password === 'contraseña') {
        alert('Inicio de sesión exitoso');
        // Redirigir a la página principal del usuario
        window.location.href = 'perfil.html';
    } else {
        document.getElementById('login-error-message').style.display = 'block';
    }
});

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('register-username').value;
    var email = document.getElementById('register-email').value;
    var password = document.getElementById('register-password').value;

    // Simulación de registro exitoso
    if (username && email && password) {
        alert('Registro exitoso');
        // Aquí podrías añadir la lógica para almacenar la información del usuario
        document.querySelector('.container').classList.remove('right-panel-active');
    } else {
        document.getElementById('register-error-message').style.display = 'block';
    }
});
