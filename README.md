# Repositório de Estudos de Typescript

## Organizando o Ambiente

* Para podermos usar o Typescript precisamos baixar o **node** e **npm**

```bash
# Baixando o node
sudo apt-get install node

# Baixando o npm
sudo apt-get install npm
```

* No linux para ter o compilador de Typescript em seu computador, deve baixar o seguinte pacote

```bash
# Requer o npm em seu computador
sudo npm install -g typescript
```

## Para rodar um programa no terminal do Linux

* A primeira coisa é compilar o arquivo em Typescript

```bash
tsc nomearquivo.ts
```

* Ele irá criar um arquivo `.js` que iremos rodar no terminal
* Para rodar um arquivo `.js` no terminal use o seguinte comando

```bash
node nomearquivo.js 
```