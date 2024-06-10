# api_vvc

Alguns testes de API.

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) 
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) 
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD) 
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white) 
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)

NODEJS + EXPRESS + Nodemon + JEST + Memory-Cache + SVG-CAPTCHA + SQLite

Repositorio: https://github.com/ViniciusVC/api_vvc


# Rodar o projeto :
```
npm start
```

![teste API](/src/img/screenshot.png "screenshot")


# Rodar testes automáticos:
```
npm test
```
![teste API](/src/img/screenshot_test.png "screenshot")


# Comando que foram usados.

## Gerar o package.json :
```
npm init -y
```

## Instalar o NODEJS no diretorio do projeto:
```
npm install
```

## Instalar o EXPRESS
```
npm install express
(Framework web que ajuda a criar APIs)
```

## Instalar o NODEMON
```
npm install nodemon
(Reinicia o servidor automaticamente quando algo é alterado.)
```

## JEST
```
Instalar o JEST:
npm install --save-dev jest
(Biblioteca de testes, apenas no ambiente de desnvolviemnto.)

O jest.config.json é o arquivo de configuração do JEST (para rodar testes automatizados).

testEnvironment é o ambiente usado no projeto
testMatch Define arquivos de teste com .js dentro do diretorio __teste__.

Ob.:
ReferenceError: module is not defined in ES module scope
I have "type": "module" in package.json file. If you remove that it will fix this.
Alternatively, if you want to keep "type": "module" you could convert your jest.config.js to be jest.config.json. 

```

## Instalar o SVG-CAPTCHA
```
npm install svg-captcha
(útil se você não pode ou não deseja usar o google recaptcha.)
```

## Instalar o MEMORY-CACHE
```
npm install memory-cache
(criar uma variavel globais que podem ser compartilhadas em requisições distintas.)
```

# Rotas
```
'/' - ex.: http://localhost:3210/
'/api/' - ex.: http://localhost:3210/api/

'/usuario' - ex.:http://localhost:3210/usuario
'/api/usuario' - ex.: http://localhost:3210/api/usuario 

'/filmes' - ex.: http://localhost:3210/filmes
'/filme' - ex.: http://localhost:3210/filme?id=2
'/api/filmes' - ex.: http://localhost:3210/api/filmes
'/api/filme' - ex.: http://localhost:3210/api/filme?id=2

'/produtos' - ex.: http://localhost:3210/produtos
'/produtos/allnome' - ex.: http://localhost:3210/produtos/allnome
'/produtos/dollar' - ex.: http://localhost:3210/produtos/dollar
'/produtos/somapreco' - ex.: http://localhost:3210/produtos/somapreco
'/produtos/porgrupo' - ex.: http://localhost:3210/produtos/porGrupo
'/produtonome' - ex.: http://localhost:3210/produtonome?nome=For
'/produto' - ex.: http://localhost:3210/produto?index=2
'/produtoid' - ex.: http://localhost:3210/produtoid?id=2
'/api/produtos' - ex.: http://localhost:3210/api/produtos
'/api/produtos/allnome' - ex.: http://localhost:3210/api/produtos/allnome
'/api/produtos/dollar' - ex.: http://localhost:3210/api/produtos/dollar
'/api/produtos/somapreco' - ex.: http://localhost:3210/api/produtos/somapreco
'/api/produtos/porgrupo' - ex.: http://localhost:3210/api/produtos/porGrupo
'/api/produtonome' - ex.: http://localhost:3210/api/produtonome?nome=For
'/api/produto' - ex.: http://localhost:3210/api/produto?index=2
'/api/produtoid' - ex.: http://localhost:3210/api/produtoid?id=2

'/captcha', - ex.: http://localhost:3210/captcha?sessao=5555
'/captchacompare' - ex.: http://localhost:3210/captchacompare?sessao=5555&text=412345
'/api/captcha' - ex.: http://localhost:3210/api/captcha?sessao=5555
'/api/captchacompare' - ex.: http://localhost:3210/api/captchacompare?sessao=5555&text=412345

'/playerupdate' - ex.: http://localhost:3210/playerupdate?mundo=1&Nick=teste1&x=1&y=2&z=3
'/playerstotal' - ex.: http://localhost:3210/playerstotal?mundo=1
'/api/playerupdate' - ex.: http://localhost:3210/api/playerupdate?mundo=1&Nick=teste1&x=1&y=2&z=3
'/api/playerstotal' - ex.: http://localhost:3210/api/playerstotal?mundo=1
```

# Banco de Dados
```
Instalar o SQLite: 
sudo apt-get update
sudo apt-get install sqlite3

Criar o banco:
$ sqlite3 bancoapivvc.db

(Vide src/data/script.sql)

Instalar o SQLite no NodeJS:
npm install sqlite3 --save
npm install sqlite --save
Criar arquivo configDB.js

```

# Nota
```
Para usar o "import" inclua a linha a baixo no  package.json:
"type": "module"

 ```