console.log('Instanciou /endpoint/usuario.js');

exports.get = function(req, res) {
    console.log('╔════════════════════════════════════════╗');
    console.log('║      endpoin /cliente.get API_VVC      ║');
    console.log('╚════════════════════════════════════════╝');
    console.log('Metodo = '+req.method); //GET
     
    res.json({usuario: 'Vinicius',metodo: 'get'})
    /*
    console.log(req);
    //Verifica metodo recebido pelo formulário (GET ou POST ou PUT)
    if(req.method=='POST'||req.method=='post'){
        console.log('resposta API copm metodo POST');        
        //Aguarda receber todos os dados ates de chamar o controller... 
        req.on('end', Controller.meusdocumentos(res, req.body,req.files));
    }else{
        //Metodo GET e PUT não faz nada
        console.log('API não pode ser acessado por GET ou PUT');
        res.status(200).send('API não pode ser acessado por '+req.method+'.');
    };
    */
  }

exports.post = function(req, res) {
    console.log('╔════════════════════════════════════════╗');
    console.log('║     endpoin /cliente.post API_VVC      ║');
    console.log('╚════════════════════════════════════════╝');
    console.log('Metodo = '+req.method); //POST
    
    res.json({usuario: 'Vinicius', metodo:'post'})
    /*
    console.log(req);
    //Verifica metodo recebido pelo formulário (GET ou POST ou PUT)
    if(req.method=='POST'||req.method=='post'){
        console.log('resposta API copm metodo POST');        
        //Aguarda receber todos os dados ates de chamar o controller... 
        req.on('end', Controller.meusdocumentos(res, req.body,req.files));
    }else{
        //Metodo GET e PUT não faz nada
        console.log('API não pode ser acessado por GET ou PUT');
        res.status(200).send('API não pode ser acessado por '+req.method+'.');
    };
    */
  }