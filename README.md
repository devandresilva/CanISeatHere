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

<h2><span style="color: green">GET</span> Listar Filmes</h2>
ENDPOINT: <span style="color: green">GET</span> /movies
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

<h2><span style="color: lime">GET</span> Retornar filme com id específico</h2>
ENDPOINT: <span style="color: lime">GET</span> /movies/<b>:id</b>
<br>ENTRADA:
<table style="border-collapse: collapse; border: 1px solid black">
  <tr>
    <th style=" border: 1px solid black">Atributo</th>
    <th style=" border: 1px solid black">Descrição</th>
  </tr>
  <tr>
    <td style=" border: 1px solid black">id</td>
    <td style=" border: 1px solid black">id do filme que será retornado</td>
  </tr>
</table>
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










## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
