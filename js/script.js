document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login realizado com sucesso!');
});

// Adiciona animação de partículas nas bordas
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.classList.add('particles');
    });
    input.addEventListener('blur', () => {
        input.classList.remove('particles');
    });
});
document.getElementById('btn-login').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('criar-form').style.display = 'none';
});

document.getElementById('btn-criar').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('criar-form').style.display = 'block';
});
