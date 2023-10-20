const cache = require('memory-cache'); // Instanciar o memory-cache (Variavel global)

console.log('Instanciou /endpoint/updateplayers.js');

// Guardar variavies globais/session.
// https://www.npmjs.com/package/memory-cache

exports.get = function(req, res) {
    console.log('╔══════════════════════════════╗');
    console.log('║  endpoint/updateplayers.get  ║');
    console.log('╚══════════════════════════════╝');
    
    // posisao do player (x,y,z); 
    let player1 = {nick:"teste1", posit:{x:"0", y:"0", z:"0"}}
    let player2 = {nick:"teste2", posit:{x:"0", y:"0", z:"0"}}
    let player3 = {nick:"teste3", posit:{x:"0", y:"0", z:"0"}}
    let player4 = {nick:"teste4", posit:{x:"0", y:"0", z:"0"}}
    let listPlayers = {[player1,player2,player3,player4]}
    
    try {
        // Alguma variavel criada?
        listPlayers = cache.get("listPlayers");
    } catch (error) {
        console.error
    }

    console.log(variavelteste);

    // Atualisar variavel
    cache.put("listPlayers", listPlayers, 3300000); // criar ou atualizar uma variavel global

    res.json(listPlayers) 

};


exports.total = function(req, res) {
    console.log('╔════════════════════════════════╗');
    console.log('║  endpoint/updateplayers.total  ║');
    console.log('╚════════════════════════════════╝');
    
    // posisao do player (x,y,z); 
    let player = {nick:"teste1", posit:{x:"0", y:"0", z:"0"}}
    let listPlayers = {}
    
    try {
        // Alguma variavel criada?
        listPlayers = cache.get("listPlayers");
    } catch (error) {
        console.error
    }

    console.log(variavelteste);

    // Atualisar variavel
    cache.put("listPlayers", listPlayers, 3300000); // criar ou atualizar uma variavel global

    res.json({totalplayers:4}) 
    
};