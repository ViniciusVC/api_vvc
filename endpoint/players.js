const cache = require('memory-cache'); // Instanciar o memory-cache (Variavel global)

console.log('Instanciou /endpoint/players.js');

// Guardar variavies globais/session.
// https://www.npmjs.com/package/memory-cache

exports.update = function(req, res) {
    console.log('╔══════════════════════════════╗');
    console.log('║  endpoint/updateplayers.get  ║');
    console.log('╚══════════════════════════════╝');
    
    let varMetodo = "get"
    if(req.method!=undefined){
        varMetodo=req.method;
    }
    let mundo=req.query.mundo
    let playerNick = req.query.Nick
    let playerX = req.query.x
    let playerY = req.query.y
    let playerZ = req.query.z

    if (mundo == undefined){
        console.erro("ERRO : Mundo nao informado")
        res.json({res: "erro",menssagem:"Mundo nao informado",method:varMetodo}) 
    } else if (playerNick == undefined){
        console.erro("ERRO : Nick nao informado")
        res.json({res: "erro",menssagem:"Nick nao informado",method:varMetodo}) 
    } else if (playerX == undefined){
        console.erro("ERRO : posicao X nao informada")
        res.json({res: "erro",menssagem:"posicao X nao informada",method:varMetodo}) 
    } else if (playerY == undefined){
        console.erro("ERRO : posicao Y nao informada")
        res.json({res: "erro",menssagem:"posicao Y nao informada",method:varMetodo}) 
    } else if (playerZ == undefined){
        console.erro("ERRO : posicao Z nao informada")
        res.json({res: "erro",menssagem:"posicao Z nao informada",method:varMetodo}) 
    }else{
        let playerAtual = {nick:playerNick, posit:{x:playerX, y:playerY, z:playerZ}, time:40};
        let playerZerado = {nick:"", posit:{x:"0", y:"0", z:"0"}, time:0};
        let listPlayers = cache.get("listPlayers"+mundo); // Lendo variavel global. Lista de players.
        console.log("Carregou variaveis do mundo "+mundo+".");
        console.log(listPlayers)

        if(listPlayers==null || listPlayers==undefined){

            listPlayers = [playerAtual,playerZerado,playerZerado,playerZerado];
            // criar uma variavel global nova com a lista de player vazia.

        }else{
            let achou = false
            for(var i = 0; i < listPlayers.length; i++){

                if(listPlayers[i].nick !== ""){
                    if(listPlayers[i].nick == playerNick){
                        listPlayers[i]=playerAtual; // Atualizar informacoes do player atual.
                        achou=true // Achou o player atual.
                    }else{
                        listPlayers[i].time=listPlayers[i].time-1 // contagem regresiva para deslogar outro player.
                    }
                }

            }
            if(achou==false){
                for(var i = 0; i < listPlayers.length; i++){

                    if(listPlayers[i].nick == ""){
                        listPlayers[i]=playerAtual; // Incluir player atual, em um slot vazio.
                        i=listPlayers.length
                    }

                }    
            }
        }
        cache.put("listPlayers"+mundo, listPlayers, 3300000); // Criar ou atualizar a variavel global.
        res.json(listPlayers)
    }

};


exports.total = function(req, res) {
    console.log('╔════════════════════════════════╗');
    console.log('║  endpoint/updateplayers.total  ║');
    console.log('╚════════════════════════════════╝');
    
    // posisao do player (x,y,z); 
    
    if(req.method!=undefined){
        varMetodo=req.method;
    }
    let mundo=req.query.mundo
    if (mundo == undefined){

        console.erro("ERRO : Mundo nao informado")
        res.json({res: "erro",menssagem:"Mundo nao informado",method:varMetodo}) 
  
    }else{

        let playerZerado = {nick:"", posit:{x:"0", y:"0", z:"0"}, time:0};
        let varTotal = 0; // Contagem total de player ativos.
        let listPlayers = cache.get("listPlayers"+mundo); // lista de player 
        console.log("Carregou variaveis do mundo "+mundo+".");
        console.log(listPlayers)

        if(listPlayers==null || listPlayers==undefined){

            listPlayers = [playerZerado,playerZerado,playerZerado,playerZerado];
            // criar uma variavel global com a lista de player vazia.         

        }else{

            for(var i = 0; i < listPlayers.length; i++){
                if(listPlayers[i].nick !== ""){
                    listPlayers[i].time=listPlayers[i].time-1 // contagem regresiva para deslogar o player.
                    varTotal = varTotal+1;
                    console.log("["+i+"]nick="+listPlayers[i].nick+" | total="+varTotal);
                }
            }
            // Atualizar a variavel global.

        }
        console.log("varTotal:"+varTotal);
        cache.put("listPlayers"+mundo, listPlayers, 3300000); 
        res.json({playerslogados:varTotal}) 

    }
};