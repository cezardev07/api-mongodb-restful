<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" width="100%"/>

<div align="center">
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
    <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"/>
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
</div>

### API RESTful MONGODB

Este repositório contém uma API RESTful simples construída usando o Express.js mongodb e mongoose que oferece operações básicas de CRUD para gerenciar dados. A API permite criar, ler, atualizar e excluir registros de um banco de dados no mongodb.

### Índice

1. [Instalação](#instalação)
2. [Uso](#uso)
4. [Tratamento de Erros](#tratamento-de-erros)

### Instalação

Para começar a usar a API RESTful, siga estas etapas:

1. Clone este repositório para a sua máquina local.

        git clone < repositorio >

        cd ./ < name project >

2. Instale as dependências necessárias usando o seguinte comando:

        npm install


3. Execute a API usando o seguinte comando:
        
        npm run dev

O servidor da API começará a ser executado em   
    
    http://localhost:3333/api/<routes>

### Uso

Esta API fornece endpoints para gerenciar dados. Você pode interagir com a API usando ferramentas como curl, Postman, Insomnia ou qualquer outra ferramenta de teste de API.

### Tratamento de Erros

A API fornece respostas de erro apropriadas em caso de dados inválidos ou ausentes. Aqui estão algumas das respostas de erro que você pode encontrar:

    400 Bad Request: 
        Dados inválidos fornecidos.

    404 Not Found: 
        Não encontrado para atualização ou exclusão.

É importante ressaltar que este projeto é voltado exclusivamente para fins educacionais e de aprendizado.