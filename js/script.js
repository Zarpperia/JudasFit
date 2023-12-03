document.getElementById('mensagem-nao-tenho-conta').addEventListener('click', function() {
    document.getElementById('caixa-login').classList.add('escondido');
    document.getElementById('caixa-criar-conta').classList.remove('escondido');
});

document.getElementById('botao-login').addEventListener('click', function() {
    // Lógica de login
    alert('Realizando login...');
});

document.getElementById('botao-criar-conta').addEventListener('click', function() {
    // Lógica para criar conta
    alert('Criando conta...');
});

document.getElementById('botao-login-gmail').addEventListener('click', function() {
    // Lógica para login com Gmail
    alert('Logando com Gmail...');
});

const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 5500;

// Cria ou conecta ao banco de dados SQLite
const db = new sqlite3.Database('usuarios.db');

// Cria a tabela de usuários se não existir
db.run(`
    CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        password TEXT NOT NULL
    )
`);

// Middleware para receber dados JSON nas requisições
app.use(express.json());

// Rota para criar um novo usuário
app.post('/api/usuarios', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Usuário e senha são obrigatórios' });
    }

    db.run('INSERT INTO usuarios (username, password) VALUES (?, ?)', [username, password], function(err) {
        if (err) {
            return res.status(500).json({ error: 'Erro ao criar usuário' });
        }

        res.json({ id: this.lastID, username });
    });
});

// Rota para listar todos os usuários
app.get('/api/usuarios', (req, res) => {
    db.all('SELECT * FROM usuarios', (err, rows) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao buscar usuários' });
        }

        res.json(rows);
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

