# api_vvc

```
Experiments with API.
Alguns testes de API.
NODEJS + EXPRESS + nodemon
```

# Rodar o projeto :
```
npm start
```

![teste API](/src/img/screenshot.png "screenshot")

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

## Rotas :
```
'/' - ex.: http://localhost:3210/
'/api/' - ex.: http://localhost:3210/api/

'/usuario' - ex.:http://localhost:3210/usuario
'/api/usuario' - ex.: http://localhost:3210/api/usuario Metodo

'/filmes' - ex.: http://localhost:3210/filmes
'/api/filmes' - ex.: http://localhost:3210/api/filmes
'/filme' - ex.: http://localhost:3210/filme?id=2
'/api/filme' - ex.: http://localhost:3210/api/filme?id=2

'/produtos' - ex.: http://localhost:3210/produtos
'/api/produtos' - ex.: http://localhost:3210/api/produtos
'/produto' - ex.: http://localhost:3210/produto?id=2
'/api/produto' - ex.: http://localhost:3210/api/produto?id=2

'/captcha', - ex.: http://localhost:3210/captcha?sessao=5555
/api/captcha' - ex.: http://localhost:3210/api/captcha?sessao=5555
'/captchacompare' - ex.: http://localhost:3210/captchacompare?sessao=5555&text=412345
'/api/captchacompare' - ex.: http://localhost:3210/api/captchacompare?sessao=5555&text=412345

'/playerupdate' - ex.: http://localhost:3210/playerupdate?mundo=1&Nick=teste1&x=1&y=2&z=3
'/api/playerupdate' - ex.: http://localhost:3210/api/playerupdate?mundo=1&Nick=teste1&x=1&y=2&z=3
'/playerstotal' - ex.: http://localhost:3210/playerstotal?mundo=1
'/api/playerstotal' - ex.: http://localhost:3210/api/playerstotal?mundo=1



```