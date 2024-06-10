//const Controller = require('../controller/meusdocumentos.js');
//const dataFilmes = require('../data/filmes.json');
import dataFilmes from '../data/filmes.json' assert { type: "json" };

console.log('Instanciou /controller/filmes.js');

export default function all(req, res) {
    //exports.all = function(req, res) {
    console.log('╔══════════════════════════════════════╗');
    console.log('║     controller/filme.get API_VVC     ║');
    console.log('╚══════════════════════════════════════╝');
    console.log('Metodo = '+req.method); //GET

    //console.log(req);
    //Verifica metodo recebido pelo formulario (GET ou POST ou PUT)
    if(req.method=='POST'||req.method=='post'){
        console.log('resposta API copm metodo POST');        
        // Aguarda receber todos os dados ates de chamar o controller...
        req.on('end', Controller.meusdocumentos(res, req.body,req.files));
    }else{
        console.log('resposta API com metodo GET');
        // Metodo GET e PUT nao faz nada.
        res.json(dataFilmes);
        //res.status(200).send('API nao pode ser acessado por '+req.method+'.');
    };
    
  }

export async function get(req, res) {
    //exports.get = function(req, res) {
    console.log('╔══════════════════════════════════════╗');
    console.log('║     controller/filme.get API_VVC     ║');
    console.log('╚══════════════════════════════════════╝');
    console.log('Metodo = '+req.method); //GET

    let idFilmes = req.query.id
 
    if (idFilmes == undefined){
        idFilmes=0;
    } else {
        idFilmes=idFilmes-1;
    }
    res.json(dataFilmes[idFilmes]);
}

/*
exports.post = function(req, res) {
    console.log('╔══════════════════════════════════════╗');
    console.log('║     endpoin /filme.post API_VVC      ║');
    console.log('╚══════════════════════════════════════╝');
    console.log('Metodo = '+req.method); //POST
    
    let idFilmes = req.query.id
 
    if (idFilmes == undefined){
        idFilmes=0;
    } else {
        idFilmes=idFilmes-1;
    }
    res.json(dataFilmes[idFilmes]);
}
*/