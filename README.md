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

## Autorização

<p> Para acessar os endpoints da API é necessário autorização através de autenticação.</p>
<h2>SIGNUP</h2>
ENDPOINT: POST /auth/signup
<br>ENTRADA:

| atributos | descrição                      |
|-----------|--------------------------------|
| username        | nome de usuario a ser cadastrado |
| password        | senha do usuario a ser cadastrado |

<br>SAÍDA: Retorna o usuario criado
<br>EXEMPLO DE <b>ENTRADA</b>:

```bash
[
  {
    "name": "maria",
    "password": "Maria123"
  }
]
```
<br>EXEMPLO DE <b>SAÍDA</b>:

```bash
{
  "username": "maria",
  "password": "2b10zuA1WCP5B2inRw9tsE.D3ORvc510UFcfkttfLRHFDi0Ui5vnXjb.S",
  "id": 2
}
```
<h2>SIGNIN</h2>
ENDPOINT: POST /auth/signin
<br>ENTRADA:

| atributos | descrição                      |
|-----------|--------------------------------|
| username        | nome de usuario a ser cadastrado |
| password        | senha do usuario a ser cadastrado |

<br>SAÍDA: Retorna o token de acesso
<br>EXEMPLO DE <b>ENTRADA</b>:

```bash
[
  {
    "name": "maria",
    "password": "Maria123"
  }
]
```
<br>EXEMPLO DE <b>SAÍDA</b>:

```bash
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5hdGFsaWEiLCJpYXQiOjE2NzI2NjM4NTIsImV4cCI6MTY3MjY2NzQ1Mn0.0KTkrPd7JDOcRZJCL5zY_6o6d7PqWzhMYtZoBwHik60"
}
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
  },
  {
    "id": 2,
    "name": "Vingadores: Guerra Infinita",
    "synopsis": "Os heróis mais fortes da terra vs Thanos"
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

SAÍDA: JSON com informações do filme criado
<br>EXEMPLO DE SAÍDA:

```bash
[
  {
    "id": 3,
    "name": "nome do filme criado",
    "synopsis": "descrição do filme criado"
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

SAÍDA: JSON com informações alteradas do filme
<br>EXEMPLO DE <b>ENTRADA</b>:

```bash
[
  {
    "name": "nome do filme alterado",
    "synopsis": "descrição do filme alterado"
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
  }
]
```

<h2>DELETE Remover Filme</h2>
ENDPOINT: DELETE /movies/<b>:id</b>
<br>ENTRADA:

| atributos      | descrição                       |
|----------------|---------------------------------|
| id           | id do filme a ser removido      |

SAÍDA: informando a remoção do filme
<br>EXEMPLO DE SAÍDA:

```bash
{
  "raw": [],
  "affected": 1
}
```

## CRUD da tabela rooms

<h2> GET Listar Salas</h2>
ENDPOINT: GET /rooms
<br>ENTRADA: Nenhuma
<br>SAÍDA: JSON listando todos as salas
<br>EXEMPLO DE SAÍDA:

```bash
[
  {
    "id": 1,
    "name": "Sala de Ficção"
  },
  {
    "id": 2,
    "name": "Sala do Terror"
  }
]
```

<h2>GET Retornar sala com id específico</h2>
ENDPOINT: GET /rooms/<b>:id</b>
<br>ENTRADA:

| atributos | descrição                      |
|-----------|--------------------------------|
| id        | id da sala que será retornada |

SAÍDA: JSON com informações da sala especificada
<br>EXEMPLO DE SAÍDA:

```bash
[
  {
    "id": 2,
    "name": "Sala do Terror"
  }
]
```

<h2>POST Criar Sala</h2>
ENDPOINT: POST /rooms
<br>ENTRADA:

| atributos      | descrição                       |
|----------------|---------------------------------|
| name           | nome da sala a ser criada      |

SAÍDA: JSON com informações da sala criada
<br>EXEMPLO DE SAÍDA:

```bash
[
  {
    "id": 3,
    "name": "Sala do romance",
  }
]
```

<h2>PATCH Alterar Sala</h2>
ENDPOINT: PATCH /rooms<b>/:id</b>
<br>ENTRADA:

| atributos      | descrição                       |
|----------------|---------------------------------|
| id             | id da sala a ser alterada      |
| name           | nome da sala a ser alterada      |

SAÍDA: JSON com informações alteradas da sala
<br>EXEMPLO DE <b>ENTRADA</b>:

```bash
[
  {
    "name": "nome da sala alterada"
  }
]
```
EXEMPLO DE SAÍDA:
```bash
[
  {
    "id": 3,
    "name": "nome da sala alterada"
  }
]
```

<h2>DELETE Remover Sala</h2>
ENDPOINT: DELETE /rooms/<b>:id</b>
<br>ENTRADA:

| atributos      | descrição                       |
|----------------|---------------------------------|
| id           | id da sala a ser removida      |

SAÍDA: informando a remoção da sala
<br>EXEMPLO DE SAÍDA:

```bash
{
  "raw": [],
  "affected": 1
}
```

## CRUD da tabela seats

<h2> GET Listar Assentos</h2>
ENDPOINT: GET /seats
<br>ENTRADA: Nenhuma
<br>SAÍDA: JSON listando todos os assentos
<br>EXEMPLO DE SAÍDA:

```bash
[
  {
    "id": 1,
    "seatNumber": 1
  },
  {
    "id": 2,
    "seatNumber": 2
  }
]
```

<h2>GET Retornar assento com id específico</h2>
ENDPOINT: GET /seats/<b>:id</b>
<br>ENTRADA:

| atributos | descrição                      |
|-----------|--------------------------------|
| id        | id do assento que será retornado |

SAÍDA: JSON com informações do assento especificado
<br>EXEMPLO DE SAÍDA:

```bash
[
  {
    "id": 2,
    "seatNumber": 2
  }
]
```

<h2>POST Criar Assento</h2>
ENDPOINT: POST /seats
<br>ENTRADA:

| atributos      | descrição                       |
|----------------|---------------------------------|
| roomId           | a sala a qual o assento pertence      |
| seatNumber           | número do assento na sala      |

SAÍDA: JSON com informações do assento criado
<br>EXEMPLO DE <b>ENTRADA</b>:

```bash
{
  "roomId": 2,
  "seatNumber": 3
}
```

EXEMPLO DE SAÍDA:
```bash
{
  "seatNumber": 3,
  "room": {
    "id": 2,
    "name": "Quarto da Terror",
    "seats": [
      {
        "id": 1,
        "seatNumber": 1
      },
      {
        "id": 2,
        "seatNumber": 2
      }
    ]
  },
  "id": 3
}
```

<h2>DELETE Remover Assento</h2>
ENDPOINT: DELETE /seats/<b>:id</b>
<br>ENTRADA:

| atributos      | descrição                       |
|----------------|---------------------------------|
| id           | id do assento a ser removido      |

SAÍDA: informando a remoção do assento
<br>EXEMPLO DE SAÍDA:

```bash
{
  "raw": [],
  "affected": 1
}
```

## CRUD da tabela Sessions

<h2> GET Listar Sessões</h2>
ENDPOINT: GET /sessions
<br>ENTRADA: Nenhuma
<br>SAÍDA: JSON listando todas as sessões
<br>EXEMPLO DE SAÍDA:

```bash
[
  {
    "id": 1,
    "date": "12-01-2023",
    "start": "17:00",
    "end": "19:40"
  },
  {
    "id": 2,
    "date": "12-01-2023",
    "start": "16:30",
    "end": "18:10"
  },
  {
    "id": 3,
    "date": "15-01-2023",
    "start": "16:30",
    "end": "18:10"
  }
]
```

<h2>GET Retornar sessão com id específico</h2>
ENDPOINT: GET /sessions/<b>:id</b>
<br>ENTRADA:

| atributos | descrição                      |
|-----------|--------------------------------|
| id        | id da sessão que será retornada |

SAÍDA: JSON com informações da sessão especificada
<br>EXEMPLO DE SAÍDA:

```bash
{
  "id": 4,
  "date": "12-01-2023",
  "start": "16:30",
  "end": "18:10",
  "movie": {
    "id": 1,
    "name": "APENAS O NOME ALTERADO",
    "synopsis": "Com certeza um dos filmes já criados"
  },
  "room": {
    "id": 2,
    "name": "Quarto da Ficção",
    "seats": [
      {
        "id": 1,
        "seatNumber": 1
      },
      {
        "id": 2,
        "seatNumber": 2
      }
    ]
  }
}
```

<h2>GET Retornar assentos disponíveis na sessão</h2>
ENDPOINT: GET /sessions/<b>:id/seats</b>
<br>ENTRADA:

| atributos | descrição                      |
|-----------|--------------------------------|
| id        | id da sessão que retornará os assentos disponíveis |

SAÍDA: JSON com informações dos assentos disponíveis na sessão especificada
<br>EXEMPLO DE SAÍDA:

```bash
[
  {
    "id": 2,
    "seatNumber": 2
  }
]
```

<h2>POST Criar Sessão</h2>
ENDPOINT: POST /sessions
<br>ENTRADA:

| atributos      | descrição                       |
|----------------|---------------------------------|
| movieId           | id do filme que será apresentado na sessão      |
| roomId           | id da sala que ocorrerá a sessão      |
| date           | data da exibição da sessão      |
| start           | horário de início da sessão       |
| end           | hprário do final da sessão     |

SAÍDA: JSON com informações da sessão criada
<br>EXEMPLO DE <b>ENTRADA</b>:

```bash
{
  "movieId": 1,
  "roomId": 2,
  "date": "02-02-2023",
  "start": "15:30",
  "end": "17:20"
}
```
<br>EXEMPLO DE <b>SAÍDA</b>:

```bash
{
  "date": "02-02-2023",
  "start": "15:30",
  "end": "17:20",
  "movie": {
    "id": 1,
    "name": "APENAS O NOME ALTERADO",
    "synopsis": "Com certeza um dos filmes já criados"
  },
  "room": {
    "id": 2,
    "name": "Quarto da Ficção",
    "seats": [
      {
        "id": 1,
        "seatNumber": 1
      },
      {
        "id": 2,
        "seatNumber": 2
      }
    ]
  },
  "id": 5
}
```

<h2>PATCH Alterar Sessão</h2>
ENDPOINT: PATCH /sessions<b>/:id</b>
<br>ENTRADA:

| atributos      | descrição                       |
|----------------|---------------------------------|
| id           | id da sessão que sofrerá alteração      |
| date           | data da exibição da sessão      |
| start           | horário de início da sessão       |
| end           | hprário do final da sessão     |

SAÍDA: JSON com informações alteradas da sessão
<br>EXEMPLO DE <b>ENTRADA</b>:

```bash
{
  "date": "10-02-2023",
  "start": "16:30",
  "end": "18:20"
}
```
EXEMPLO DE SAÍDA:
```bash
{
  "id": 5,
  "date": "02-02-2023",
  "start": "15:30",
  "end": "17:20",
  "movie": {
    "id": 1,
    "name": "APENAS O NOME ALTERADO",
    "synopsis": "Com certeza um dos filmes já criados"
  },
  "room": {
    "id": 2,
    "name": "Quarto da Ficção",
    "seats": [
      {
        "id": 1,
        "seatNumber": 1
      },
      {
        "id": 2,
        "seatNumber": 2
      }
    ]
  }
}
```

<h2>DELETE Remover Sessão</h2>
ENDPOINT: DELETE /sessions/<b>:id</b>
<br>ENTRADA:

| atributos      | descrição                       |
|----------------|---------------------------------|
| id           | id da sessão a ser removida      |

SAÍDA: informando a remoção da sessão
<br>EXEMPLO DE SAÍDA:

```bash
{
  "raw": [],
  "affected": 1
}
```

## CRUD da tabela Reserves

<h2> GET Listar Reservas</h2>
ENDPOINT: GET /reserves
<br>ENTRADA: Nenhuma
<br>SAÍDA: JSON listando todas as reservas
<br>EXEMPLO DE SAÍDA:

```bash
[
  {
    "id": 1
  },
  {
    "id": 2
  }
]
```

<h2>GET Retornar reserva com id específico</h2>
ENDPOINT: GET /reserves/<b>:id</b>
<br>ENTRADA:

| atributos | descrição                      |
|-----------|--------------------------------|
| id        | id da reserva que será retornada |

SAÍDA: JSON com informações da reserva especificada
<br>EXEMPLO DE SAÍDA:

```bash
{
  "id": 2,
  "user": {
    "id": 2,
    "username": "maria",
    "password": "2b10zuA1WCP5B2inRw9tsE.D3ORvc510UFcfkttfLRHFDi0Ui5vnXjb.S"
  },
  "session": {
    "id": 3,
    "date": "12-01-2023",
    "start": "16:30",
    "end": "18:10",
    "movie": {
      "id": 2,
      "name": "SEGUNDO FILME ALTERADO",
      "synopsis": "just a film"
    },
    "room": {
      "id": 1,
      "name": "Quarto do Medo",
      "seats": [
        {
          "id": 5,
          "seatNumber": 4
        }
      ]
    }
  },
  "seat": {
    "id": 5,
    "seatNumber": 4
  }
}
```

<h2>GET Retornar reservas de uma sessão sessão específica</h2>
ENDPOINT: GET /reserves/<b>session/:id</b>
<br>ENTRADA:

| atributos | descrição                      |
|-----------|--------------------------------|
| id        | id da sessão que retornará as reservas feitas |

SAÍDA: JSON com informações das reservas feitas na sessão especificada
<br>EXEMPLO DE SAÍDA:

```bash
[
  {
    "id": 2,
    "seat": {
      "id": 5,
      "seatNumber": 4
    }
  }
]
```

<h2>POST Criar Reserva</h2>
ENDPOINT: POST /reserves
<br>ENTRADA:

| atributos      | descrição                       |
|----------------|---------------------------------|
| sessionId           | id da sessão que quer fazer reserva      |
| seatId           | id do assento que quer sentar      |

SAÍDA: JSON com informações da reserva criada
<br>EXEMPLO DE <b>ENTRADA</b>:

```bash
{
  "sessionId": 3,
  "seatId": 5
}
```
<br>EXEMPLO DE <b>SAÍDA</b>:

```bash
{
  "user": {
    "id": 2,
    "username": "maria",
    "password": "2b10zuA1WCP5B2inRw9tsE.D3ORvc510UFcfkttfLRHFDi0Ui5vnXjb.S"
  },
  "session": {
    "id": 3,
    "date": "12-01-2023",
    "start": "16:30",
    "end": "18:10",
    "movie": {
      "id": 2,
      "name": "SEGUNDO FILME ALTERADO",
      "synopsis": "just a film"
    },
    "room": {
      "id": 1,
      "name": "Quarto do Medo",
      "seats": [
        {
          "id": 5,
          "seatNumber": 4
        }
      ]
    }
  },
  "seat": {
    "id": 5,
    "seatNumber": 4
  },
  "id": 2
}
```

<h2>DELETE Cancelar/remover Reserva</h2>
ENDPOINT: DELETE /reserves/<b>:id</b>
<br>ENTRADA:

| atributos      | descrição                       |
|----------------|---------------------------------|
| id           | id da reserva a ser removida      |

SAÍDA: informando a remoção da reserva
<br>EXEMPLO DE SAÍDA:

```bash
{
  "raw": [],
  "affected": 1
}
```

## Executar a API no Postman

O [Postman](https://www.postman.com/) é um API Client que facilita aos desenvolvedores criar, compartilhar, testar e documentar APIs. Isso é feito, permitindo aos usuários criar e salvar solicitações HTTP e HTTPs simples e complexas, bem como ler suas respostas.

<h2>Importando a coleção do Postman</h2>
Link: https://www.postman.com/navigation-astronaut-14685497/workspace/publicjobs/collection/20433040-7e499415-13d5-4ef4-ba8f-03faba3401f2?action=share&creator=20433040

<br>Após importado, basta testar a API.