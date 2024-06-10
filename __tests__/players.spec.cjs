
/*
 Arquivo de teste com JEST.
 
 O Jest é um frameWork com varias ferramentas de teste.

 Funções:
 - Describle -> Bloco de tests - test suites. 
 - It ou Test -> declara unico teste unitario.
 - Expect -> ações do resultado dos testes.

 Neste exemplo estamos usando o Describle, para rodar 2 testes.

 Rotas testadas:
 '/playerupdate' // http://localhost:3210/playerupdate?mundo=1&Nick=teste1&x=1&y=2&z=3
 '/api/playerupdate' // http://localhost:3210/api/playerupdate?mundo=1&Nick=teste1&x=1&y=2&z=3
 '/playerstotal', // http://localhost:3210/playerstotal?mundo=1
 '/api/playerstotal', // http://localhost:3210/api/playerstotal?mundo=1
 */

import { describe, expect, test } from "@jest/globals"

//const EndPointPlayer = require('../endpoint/players');
import EndPointPlayer from '../endpoint/players'

 //jest.mock('../../caminho/arquivo');
 
 describe('TestPlayers', () => {
  // A função describle agrupa um conjunto de testes unitarios.
    
  //beforeEach(() => { jest.clearAllMocks(); });
   
  it('test 1 api Players. Criar um player.', async () => {
    //http://localhost:3210/playerupdate?mundo=testeapi&Nick=teste1&x=1&y=2&z=3   
    const req = {query:{
        "mundo":"testeapi",
        "Nick":"teste1",
        "x":"1",
        "y":"2",
        "z":"3"}
    };
    const respostaEsperada = [
        {"nick":"teste1","posit":{"x":"1","y":"2","z":"3"},"time":40},
        {"nick":"","posit":{"x":"0","y":"0","z":"0"},"time":0},
        {"nick":"","posit":{"x":"0","y":"0","z":"0"},"time":0},
        {"nick":"","posit":{"x":"0","y":"0","z":"0"},"time":0}
    ]
    expect(EndPointPlayer.update(req)).toEqual(respostaEsperada);
  });
 
 
  it('Test 2 api Players. Verificar se player e mundo foram criados.', async () => {
    //http://localhost:3210/api/playerstotal?mundo=testeapi
    const req = {query:{"mundo":"testeapi"}};
    const respostaEsperada = {"playerslogados": 1}
    expect(EndPointPlayer.total(req)).toEqual(respostaEsperada); 
  });


  it('Test 3 api Players. Forcar erro. Players logados zerados ', async () => {
    //http://localhost:3210/playerstotal?mundo=naocriado
    const req = {query:{"mundo":"naocriado"}};
    const respostaEsperada = {"playerslogados":0}
    expect(EndPointPlayer.total(req)).toEqual(respostaEsperada);
  });



  it('Test 4 api Players. Forcar erro Mundo nao informado.', async () => {
    //htp://localhost:3210/playerupdate?Nick=teste1&x=1&y=2&z=3
    const queryMok = {query:{
      "Nick":"teste1",
      "x":"1",
      "y":"2",
      "z":"3"}
    };
    const respostaEsperada4 = {
      "res":"erro",
      "menssagem":"Mundo nao informado",
      "method":"get"
    }
    expect(EndPointPlayer.update(queryMok)).toEqual(respostaEsperada4);
  });



 });

