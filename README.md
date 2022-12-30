<p align="center">
  <img src="./public/CanISeatHere-Logo.png" width="200" alt="Nest Logo" />
</p>

  <p align="center">A API RESTful made by André Silva and Natália Simões</p>
    <p align="center">

## Descrição

[Can I Seat Here?](https://github.com/devandresilva/caniseathere) É uma API RESTful feita com NestJS e criada a trabalho para a disciplina de <i>Desenvolvimento de Sistemas Corporativos</i>, ministrada pelo professor Gustavo Sizílio Nery.


## Introdução

A API foi desenvolvida com base no ato de fazer uma reserva/comprar um ingresso para assistir um filme no cinema, onde o cliente pode solicitar a reserva de um determinado assento em uma sessão do cinema, que é composta pelo filme e a sala onde ocorrerá a sessão.


## Instalação

```bash
$ npm install
```


## Executando a API

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```


## CRUD da tabela movies

<h2> GET Listar Filmes</h2>
ENDPOINT: GET /movies
<br>ENTRADA: Nenhuma
<br>SAÍDA: JSON listando todos os filmes
<br>EXEMPLO DE SAÍDA:

```bash
[
  {
    "id": 1,
    "name": "Batman vs Superman",
    "synopsis": "O filme onde Batman confronta o Superman"
    "exhibitionDate": "2023-01-06T20:30:00.000Z"
  },
  {
    "id": 2,
    "name": "Vingadores: Guerra Infinita",
    "synopsis": "Os heróis mais fortes da terra vs Thanos"
    "exhibitionDate": "2023-02-12T16:30:00.000Z"
  }
]
```

<h2>GET Retornar filme com id específico</h2>
ENDPOINT: GET /movies/<b>:id</b>
<br>ENTRADA:

| atributos | descrição                      |
|-----------|--------------------------------|
| id        | id do filme que será retornado |

SAÍDA: JSON com informações do filme especificado
<br>EXEMPLO DE SAÍDA:

```bash
[
  {
    "id": 2,
    "name": "Vingadores: Guerra Infinita",
    "synopsis": "Os heróis mais fortes da terra vs Thanos"
    "exhibitionDate": "2023-02-12T16:30:00.000Z"
  }
]
```

<h2>POST Criar Filme</h2>
ENDPOINT: POST /movies/
<br>ENTRADA:

| atributos      | descrição                       |
|----------------|---------------------------------|
| name           | nome do filme a ser criado      |
| synopsis       | descrição do filme a ser criado |
| exhibitionDate | data de exibição do filme       |

SAÍDA: JSON com informações do filme criado
<br>EXEMPLO DE SAÍDA:

```bash
[
  {
    "id": 3,
    "name": "nome do filme criado",
    "synopsis": "descrição do filme criado"
    "exhibitionDate": "2023-02-12T16:30:00.000Z"
  }
]
```

<h2>PATCH Alterar Filme</h2>
ENDPOINT: PATCH /movies<b>/:id</b>
<br>ENTRADA:

| atributos      | descrição                       |
|----------------|---------------------------------|
| id             | id do filme a ser alterado      |
| name           | nome do filme a ser alterado      |
| synopsis       | descrição do filme a ser alterado |
| exhibitionDate | data de exibição do filme a ser alterado |

SAÍDA: JSON com informações alteradas do filme
<br>EXEMPLO DE <b>ENTRADA</b>:

```bash
[
  {
    "name": "nome do filme alterado",
    "synopsis": "descrição do filme alterado"
    "exhibitionDate": "2023-05-24T16:30:00.000Z"
  }
]
```
EXEMPLO DE SAÍDA:
```bash
[
  {
    "id": 3,
    "name": "nome do filme alterado",
    "synopsis": "descrição do filme alterado"
    "exhibitionDate": "2023-05-24T16:30:00.000Z"
  }
]
```

<h2>DELETE Remover Filme</h2>
ENDPOINT: DELETE /movies/<b>:id</b>
<br>ENTRADA:

| atributos      | descrição                       |
|----------------|---------------------------------|
| id           | id do filme a ser removido      |

SAÍDA: JSON com informações do filme removido
<br>EXEMPLO DE SAÍDA:

```bash
[
  {
    "id": 3,
    "name": "nome do filme removido",
    "synopsis": "descrição do filme removido"
    "exhibitionDate": "2023-05-24T16:30:00.000Z"
  }
]
```