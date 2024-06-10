
// Instanciar biblioteca memory-cache (gera rador do SVG)
//const svgCaptcha = require('svg-captcha'); 
import svgCaptcha from 'svg-captcha';

// Instanciar o memory-cache (Variavel global)
//var cache = require('memory-cache'); 
import cache from 'memory-cache';

console.log('Instanciou /controller/captcha.js');

// Guardar variavies globais/session.
// https://www.npmjs.com/package/memory-cache

export default function create(req, res) {
//exports.create = function(req, res) {
    console.log('╔════════════════════════════════════════╗');
    console.log('║   controller/captcha.create            ║');
    console.log('╚════════════════════════════════════════╝');
    console.log('(Gerando captcha...)');
    
    //var varcaptcha = svgCaptcha.create({size: 6, ignoreChars: '0Oo1iIl', noise: 2});
    var varcaptcha = svgCaptcha.create({size: 5, ignoreChars: 'qwertyuiopasdfghjklçzxcvbnm0O1I', noise: 2});
    
    let sessao = "captcha";
    if(req.query.sessao!=undefined){
        sessao=sessao+req.query.sessao
    };
    
    cache.put(sessao, varcaptcha.text, 3300000); // criar uma variavel global // 3300000 milesegundos == 55 minutos
    console.log("Guardou o captcha "+varcaptcha.text+" na variavel global " + sessao + ", por 55 minutos");
    
    res.type('svg');
    res.status(200).send(varcaptcha.data);
};


export async function compare(req, res) {
//exports.compare = function(req, res) {
    console.log('╔════════════════════════════════════════╗');
    console.log('║   controller/captcha.compare           ║');
    console.log('╚════════════════════════════════════════╝');
    console.log('(Confirmar) Nao disponivel.');

    let sessao = "captcha";
    let textoCaptcha = "";
    let textDigitado = "";
    let retorno = true;
    let menssagemSaida = "ERRO."
    let varMetodo = "get" //req.method

    if(req.query.sessao!=undefined){
        // Nome da variavel de sessao.
        sessao=sessao+req.query.sessao; 
        if(cache.get(sessao)!=undefined){
            // Texto gerado pelo captcha.
            textoCaptcha=cache.get(sessao) 
            if(req.query.text!=undefined){
                // Texto digitado.
                textDigitado=req.query.text.toUpperCase(); 
                if (textDigitado==textoCaptcha){
                    retorno = true;
                    menssagemSaida = "Captcha correto.";
                }else{
                    retorno = false;
                    menssagemSaida = "Texto digitado nao equivale ao gerado pelo captcha.";
                }
            }else{
                retorno = false;
                menssagemSaida = "Texto digitado nao informado.";
            }
        }else{
            retorno = false;
            menssagemSaida = "Texto gerado pelo captcha nao informado.";
        }
    }else{
        retorno = false;
        menssagemSaida = "Nome da variavel de sessao nao informado.";
    }
 
    if(req.method!=undefined){
        varMetodo=req.method;
    }

    console.log('sessao:"'+sessao+'" | textoCaptcha = "'+textoCaptcha+'" | textDigitado:"'+textDigitado+'"');
    console.log('retorno:"'+retorno+'", menssagem:"'+menssagemSaida+'"');
    res.json({res: retorno,menssagem:menssagemSaida,method:varMetodo}) 
    
};