document.getElementById('botao-login').addEventListener('click', function() {
    const username = document.getElementById('usuario').value;
    const password = document.getElementById('senha').value;

    // Verifica se o usuário e a senha estão presentes
    if (!username || !password) {
        alert('Usuário e senha são obrigatórios.');
        return;
    }

    alert('Login realizado com sucesso!');
});

document.getElementById('botao-criar-conta').addEventListener('click', function() {
    alert('Criando nova conta...');
});

document.getElementById('botao-login-gmail').addEventListener('click', function() {
    alert('Logando com Gmail...');
});

document.getElementById('mensagem-nao-tenho-conta').addEventListener('click', function() {
    document.getElementById('caixa-login').classList.add('escondido');
    document.getElementById('caixa-criar-conta').classList.remove('escondido');
});

document.getElementById('mensagem-ja-tenho-conta').addEventListener('click', function() {
    document.getElementById('caixa-criar-conta').classList.add('escondido');
    document.getElementById('caixa-login').classList.remove('escondido');
});
