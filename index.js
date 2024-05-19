const express = require('express');
const server = express();
const porta = process.env.PORT || 3210;

const apiUsuario = require('./endpoint/usuario.js');
const apiFilmes = require('./endpoint/filmes.js');
const apiProdutos = require('./endpoint/produtos.js');
const apiCaptcha = require('./endpoint/captcha.js');
const apiPlayers = require('./endpoint/players.js');

server.get('/', (req, res) => {return res.json({mensagem: 'API_VVC funcionando'})});
server.get('/api/', (req, res) => {return res.json({mensagem: 'API_VVC funcionando'})});

server.get('/usuario', (req, res) => {apiUsuario.get(req, res);}); // http://localhost:3210/usuario
server.get('/api/usuario', (req, res) => {apiUsuario.get(req, res);}); // http://localhost:3210/api/usuario
//server.post('/usuario', upload.any(), apiUsuario.api); // Metodo POST

server.get('/filmes', (req, res) => {apiFilmes.all(req, res);}); // http://localhost:3210/filmes
server.get('/api/filmes', (req, res) => {apiFilmes.all(req, res);}); // http://localhost:3210/api/filmes
server.get('/filme', (req, res) => {apiFilmes.get(req, res);}); // http://localhost:3210/filme?id=2
server.get('/api/filme', (req, res) => {apiFilmes.get(req, res);}); // http://localhost:3210/api/filme?id=2

server.get('/produtos', (req, res) => {apiProdutos.all(req, res);}); // http://localhost:3210/produtos
server.get('/produtos/allnome', (req, res) => {apiProdutos.allnome(req, res);}); // http://localhost:3210/produtos/allnome
server.get('/produtos/dollar', (req, res) => {apiProdutos.allDollar(req, res);}); // http://localhost:3210/produtos/dollar
server.get('/produtos/somapreco', (req, res) => {apiProdutos.somaPreco(req, res);}); // http://localhost:3210/produtos/somapreco
server.get('/produtos/porgrupo', (req, res) => {apiProdutos.porGrupo(req, res);}); // http://localhost:3210/produtos/porgrupo


server.get('/api/produtos', (req, res) => {apiProdutos.all(req, res);}); // http://localhost:3210/api/produtos
server.get('/api/produtos/allnome', (req, res) => {apiProdutos.allnome(req, res);}); // http://localhost:3210/api/produtos/allnome
server.get('/api/produtos/dollar', (req, res) => {apiProdutos.allDollar(req, res);}); // http://localhost:3210/api/produtos/dollar
server.get('/api/produtos/somapreco', (req, res) => {apiProdutos.somaPreco(req, res);}); // http://localhost:3210/api/produtos/somapreco
server.get('/api/produtos/porgrupo', (req, res) => {apiProdutos.porGrupo(req, res);}); // http://localhost:3210/api/produtos/porGrupo

server.get('/produtonome', (req, res) => {apiProdutos.find(req, res);}); // http://localhost:3210/produtonome?nome=For
server.get('/api/produtonome', (req, res) => {apiProdutos.find(req, res);}); // http://localhost:3210/api/produtonome?nome=For
server.get('/produto', (req, res) => {apiProdutos.get(req, res);}); // http://localhost:3210/produto?index=2
server.get('/api/produto', (req, res) => {apiProdutos.get(req, res);}); // http://localhost:3210/api/produto?index=2
server.get('/produtoid', (req, res) => {apiProdutos.getID(req, res);}); // http://localhost:3210/produtoid?id=2
server.get('/api/produtoid', (req, res) => {apiProdutos.getID(req, res);}); // http://localhost:3210/api/produtoid?id=2


server.get('/captcha', (req, res) => {apiCaptcha.create(req, res);}); // http://localhost:3210/captcha?sessao=5555
server.get('/api/captcha', (req, res) => {apiCaptcha.create(req, res);}); // http://localhost:3210/api/captcha?sessao=5555
server.get('/captchacompare', (req, res) => {apiCaptcha.compare(req, res);}); // http://localhost:3210/captchacompare?sessao=5555&text=412345
server.get('/api/captchacompare', (req, res) => {apiCaptcha.compare(req, res);}); // http://localhost:3210/api/captchacompare?sessao=5555&text=412345

server.get('/playerupdate', (req, res) => {apiPlayers.update(req, res);}); // http://localhost:3210/playerupdate?mundo=1&Nick=teste1&x=1&y=2&z=3
server.get('/api/playerupdate', (req, res) => {apiPlayers.update(req, res);}); // http://localhost:3210/api/playerupdate?mundo=1&Nick=teste1&x=1&y=2&z=3
server.get('/playerstotal', (req, res) => {apiPlayers.total(req, res);}); // http://localhost:3210/playerstotal?mundo=1
server.get('/api/playerstotal', (req, res) => {apiPlayers.total(req, res);}); // http://localhost:3210/api/playerstotal?mundo=1


server.listen(porta, (err) => {
    if (err) throw err
    console.log('\u001b[34m╔═══════════════════════════════════════════════╗');
    console.log('\u001b[34m║ \x1b[33mIniciou a aplicação na porta : ' + porta + '           \u001b[34m║');
    console.log('\u001b[34m╚═══════════════════════════════════════════════╝\u001b[0m');
})
