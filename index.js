const express = require('express');
const server = express();
const porta = process.env.PORT || 3210;

const apiUsuario = require('./endpoint/usuario.js');
const apiFilmes = require('./endpoint/filmes.js');
const apiProdutos = require('./endpoint/produtos.js');
const apiCaptcha = require('./endpoint/captcha.js');

server.get('/', (req, res) => {
    return res.json({mensagem: 'API_VVC funcionando'})
});

server.get('/usuario', (req, res) => {apiUsuario.get(req, res);});
//server.post('/usuario', upload.any(), apiUsuario.api); // Metodo POST
server.get('/filmes', (req, res) => {apiFilmes.all(req, res);});
server.get('/filme', (req, res) => {apiFilmes.get(req, res);});

server.get('/produtos', (req, res) => {apiProdutos.all(req, res);}); // http://localhost:3210/produtos
server.get('/produto', (req, res) => {apiProdutos.get(req, res);}); // http://localhost:3210/produto?id=2

server.get('/captcha', (req, res) => {apiCaptcha.create(req, res);}); // http://localhost:3210/captcha?sessao=4321
server.get('/captchacompare', (req, res) => {apiCaptcha.compare(req, res);}); // http://localhost:3210/captchacompare?sessao=4321,text=412345

/*
server.get('/produtos', (req, res) => {
    return res.json(produtos)
});

server.get('/produto', (req, res) => {
    let idproduto = req.query.id
    if (idproduto == undefined){idproduto=0}
    else {idproduto=idproduto-1}
    return res.json(produtos[idproduto]);
    //return res.json(produtos[req.url.query.id])
});
*/

server.listen(porta, (err) => {
    if (err) throw err
    console.log('\u001b[34m╔═══════════════════════════════════════════════╗');
    console.log('\u001b[34m║ \x1b[33mIniciou a aplicação na porta : ' + porta + '           \u001b[34m║');
    console.log('\u001b[34m╚═══════════════════════════════════════════════╝\u001b[0m');
})
