const dataProdutos = require('../src/data/produtos.json');

console.log('Instanciou /endpoint/produtos.js');

exports.all = function(req, res) {
    console.log('╔══════════════════════════════════════╗');
    console.log('║    endpoin /produtos.get API_VVC     ║');
    console.log('╚══════════════════════════════════════╝');
    console.log('Metodo = '+req.method); //GET

    //console.log(req);
    //Verifica metodo recebido pelo formulario (GET ou POST ou PUT)
    if(req.method=='POST'||req.method=='post'){
        console.log('resposta API copm metodo POST');        
        // Aguarda receber todos os dados ates de chamar o controller...
        req.on('end', dataProdutos);
    }else{
        console.log('resposta API copm metodo GET');
        // Metodo GET e PUT nao faz nada.
        res.json(dataProdutos);
        //res.status(200).send('API nao pode ser acessado por '+req.method+'.');
    };
    

  }

exports.get = function(req, res) {
    console.log('╔══════════════════════════════════════╗');
    console.log('║    endpoin /produtos.get API_VVC     ║');
    console.log('╚══════════════════════════════════════╝');
    console.log('Metodo = '+req.method); //GET

    let idProdutos = req.query.id
 
    if (idProdutos == undefined){
        idProdutos=0;
    } else {
        idProdutos=idProdutos-1;
    }
    res.json(dataProdutos[idProdutos]);
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