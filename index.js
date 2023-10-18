const express = require('express');
const server = express();
const filmes = require('./src/data/filmes.json');
const produtos = require('./src/data/produtos.json');
const porta = process.env.PORT || 3210;


server.get('/', (req, res) => {
    return res.json({mensagem: 'API_VVC funcionando'})
});

server.get('/usuario', (req, res) => {
    return res.json({usuario: 'Vinicius'})
});

server.get('/filmes', (req, res) => {
    return res.json(filmes)
});

server.get('/filme', (req, res) => {
    let idFilmes = req.query.id
    if (idFilmes == undefined){idFilmes=0}
    else {idFilmes=idFilmes-1}
    return res.json(filmes[idFilmes]);
    //return res.json(filmes[req.url.query.id])
});

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


server.listen(porta, (err) => {
    if (err) throw err
    console.log('\u001b[34m╔═══════════════════════════════════════════════╗');
    console.log('\u001b[34m║ \x1b[33mIniciou a aplicação na porta : ' + porta + '           \u001b[34m║');
    console.log('\u001b[34m╚═══════════════════════════════════════════════╝\u001b[0m');
})
