const dataProdutos = require('../src/data/produtos.json');

console.log('Instanciou /endpoint/produtos.js');

exports.all = function(req, res) {
    console.log('╔══════════════════════════════════════╗');
    console.log('║    endpoin /produtos.all API_VVC     ║');
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

exports.allnome = function(req, res) {
    // Apenas os nomes dos produtos.
    console.log('╔════════════════════════════════════════╗');
    console.log('║   endpoin /produtos.allnome API_VVC    ║');
    console.log('╚════════════════════════════════════════╝');
    console.log('Metodo = '+req.method); //GET

    const ProdutosNome = dataProdutos.map(p=> p.nome);
    res.json(ProdutosNome);
}


exports.allDollar = function(req, res) {
    // Preços convertidos para dola.
    console.log('╔════════════════════════════════════════════╗');
    console.log('║    endpoin /produtos.allDollar API_VVC     ║');
    console.log('╚════════════════════════════════════════════╝');
    console.log('Metodo = '+req.method); //GET

    const precosEmDolar = dataProdutos.map(p=> p.preco / 5);
    res.json(precosEmDolar);
} 

exports.somaPreco = function(req, res) {
    // Total de preços.
    console.log('╔════════════════════════════════════════════╗');
    console.log('║    endpoin /produtos.somaPreco API_VVC     ║');
    console.log('╚════════════════════════════════════════════╝');
    console.log('Metodo = '+req.method); //GET

    const precosSomados = dataProdutos.reduce((Somados, produtoAtual)=> {
        console.log(Somados + " + " + produtoAtual.preco)
        return Somados + produtoAtual.preco;
    }, 0);

    res.json({"soma" : precosSomados.toFixed(2)});
}


exports.porGrupo = function(req, res) {
    // Total de preços.
    console.log('╔════════════════════════════════════════════╗');
    console.log('║    endpoin /produtos.Domesticos API_VVC    ║');
    console.log('╚════════════════════════════════════════════╝');
    console.log('Metodo = '+req.method); //GET

    const produtosPorGrupo = dataProdutos.reduce((produtosPorGrupo, produtoAtual)=> {
        console.log(produtoAtual);
        produtosPorGrupo[produtoAtual.grupo] = produtosPorGrupo[produtoAtual.grupo] || [];
        produtosPorGrupo[produtoAtual.grupo].push(produtoAtual);
        return produtosPorGrupo
    }, {});

    res.json(produtosPorGrupo);
}

exports.find = function(req, res) {
    // Retorna informação de apenas um produto pelo ID.
    console.log('╔══════════════════════════════════════╗');
    console.log('║   endpoin /produtos.find  API_VVC    ║');
    console.log('╚══════════════════════════════════════╝');
    console.log('Metodo = '+req.method); //GET

    let ProdName = req.query.nome
    
    if (ProdName == undefined || ProdName == ""){
        res.json({"ERRO": "Campo name vazio. Produto nao encontrado."});
    }else{

        const foundProduto = dataProdutos.filter( prod => prod.nome.includes(ProdName))
        if(foundProduto==undefined){
            res.json({"ERRO": "Produto nao encontrado."});
        }  
        res.json(foundProduto);

    }
}


exports.get = function(req, res) {
    // Retorna informação de apenas um produto pelo index.
    console.log('╔══════════════════════════════════════╗');
    console.log('║    endpoin /produtos.get API_VVC     ║');
    console.log('╚══════════════════════════════════════╝');
    console.log('Metodo = '+req.method); //GET

    let indexProdutos = req.query.index
 
    if (indexProdutos == undefined || indexProdutos == ""){
        res.json({"ERRO": "Campo index vazio. Produto nao encontrado."});
    } 
    res.json(dataProdutos[indexProdutos]);
}

exports.getID = function(req, res) {
    // Retorna informação de apenas um produto pelo ID.
    console.log('╔══════════════════════════════════════╗');
    console.log('║   endpoin /produtos.getID API_VVC    ║');
    console.log('╚══════════════════════════════════════╝');
    console.log('Metodo = '+req.method); //GET

    let IDProduto = req.query.id
    
    if (IDProduto == undefined || IDProduto == ""){
        IDProdutos=1;
    }
    
    const foundProduto = dataProdutos.find( prod => prod.id==IDProduto)
    if(foundProduto==undefined){
        res.json({"ERRO": "Produto nao encontrado."});
    }  
    res.json(foundProduto);
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