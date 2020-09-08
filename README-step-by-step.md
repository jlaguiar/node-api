# node-api

## Initial
```
  $ npm init -y
``` 
* Already create the .gitignore file and add node_modules in it

* Create the src folder and the server.ts file in it.

## Api will be made using typescript
```
  $ npm i typescript -D
``` 

* Adding typescript configuration file
 ```
  $ npx tsc --init
``` 

* Restarts when files are modified and more.
 ```
  $ npm i ts-node-dev -D
``` 

* Add this line to package.json in script.
```
  "start": "ts-node-dev --transpile-only --ignore-watch node_modules --respawn src/server.ts"
``` 

## Creating .env
```
  $ npm i dotenv
  $ npm i @types/node -D
``` 
* Create the .env file and add the code below (The server port)
```
  PORT=3333
``` 
* For dotenv configuration, add the code below to server.ts
```
  require('dotenv/config');
``` 

## Adding express
* To manage requests, we will use the express
```
  $ npm i express
  $ npm i @types/express -D
``` 

* To know the express configuration, access [server.ts](https://github.com/jlaguiar/node-api/blob/master/src/server.ts).
## Adding cors
* cors allows applications at different addresses to access the api.

```
  npm i cors
  npm install @types/cors
``` 

* Configuring cors in server.js, import cors and add
```
  app.use(cors)
``` 

* **References**
    * [Blog rocketseat - Execução em tempo de desenvolvimento dos projetos em Node.js](https://blog.rocketseat.com.br/ferramentas-de-compilacao-execucao-em-tempo-de-desenvolvimento-dos-projetos-em-node-js/#:~:text=Entra%20em%20cena%20o%20TS%2DNODE%2DDEV&text=%C3%89%20uma%20ferramenta%20que%20compila,quando%20o%20arquivo%20%C3%A9%20modificado.&text=Ele%20%C3%A9%20bem%20r%C3%A1pido%20e,da%20node_modules%20do%20nosso%20projeto.)
    
    * [Blog rocketseat - Execução em tempo de desenvolvimento dos projetos em Node.js](https://blog.rocketseat.com.br/variaveis-ambiente-nodejs/)

    * [Express](https://expressjs.com/pt-br/api.html)