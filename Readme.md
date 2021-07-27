# Fullcycle 2.0 - Docker - Nginx com Node.js

Durante o curso FullCycle 2.0 for feito um desafio para utilizar docker-compose para usar o nginx como proxy reverso de um servidor nodeJS.

## Sobre o desafio

```
Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

Suba tudo em um repositório e faça a entrega.
```

## Resultado

Para reproduzir o resultado do desafio clone o repositório, dentro da pasta do projeto, execute o seguinte comando:

`docker-compose up -d --build`

Nos primeiros instantes irá ocorrer o erro "**502 Bad Gateway**" pois o node está esperando o serviço do mysql iniciar. Após um breve tempo, o 
serviço poderá acessado através do navegador no seguinte endereço: [http://localhost:8080](http://localhost:8080).

Desafio dado é desafio comprido!
