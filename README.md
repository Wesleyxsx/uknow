# UKnow

UKnow é uma plataforma de E-Learning com gamificação que explora o apredizado do aluno através de recompensa pelo ganhos de moedas KnowToken. 

## Sumário

1. [Branches](#branches)
2. [Levantamento de Requisitos](#levantamento-de-requisitos)
    1. [Requisitos Funcionais](#requisitos-funcionais)
    2. [Requisitos Não-Funcionais](#requisitos-não-funcionais)
3. [Arquitetura do Projeto](#arquitetura-do-projeto)
4. [Modelagem do Banco de Dados]

## Branches

A estrutura de branches do projeto está organizada da seguinte forma:

- [master](https://github.com/rithienatan/uknow/tree/master): Descrições e documentações do projeto.
- [frontend-indev](https://github.com/rithienatan/uknow/tree/frontend-indev): Repositório para o projeto webapp em React que está em desenvolvimento.
- [frontend-deployed](https://github.com/rithienatan/uknow/tree/frontend-deployed): Webapp estático em produção.
- [backend-api-indev](https://github.com/rithienatan/uknow/tree/backend-api-indev): Repositório para o projeto Web API em Express que está em desenvolvimento.
- [backend-api-deployed](https://github.com/rithienatan/uknow/tree/backend-api-deployed): Web API em produção.

## Levantamento de Requisitos

### Requisitos Funcionais

<table>
    <tr>
        <th>ID</th>
        <th>Descrição</th>
    </tr>
    <tr>
        <td>#01</td>
        <td>Cadastro de Alunos.</td>
    </tr>
    <tr>
        <td>#02</td>
        <td>As carteiras devem ser criadas após o cadastro de Alunos.</td>
    </tr>
</table>

### Requisitos Não-Funcionais

<table>
    <tr>
        <th>ID</th>
        <th>Descrição</th>
    </tr>
    <tr>
        <td>#01</td>
        <td>HTML, CSS, JavaScript</td>
    </tr>
    <tr>
        <td>#02</td>
        <td>ReactJS e React-Bootstrap</td>
    </tr>
    <tr>
        <td>#03</td>
        <td>NodeJS e ExpressJS</td>
    </tr>
    <tr>
        <td>#04</td>
        <td>Firebase - Hosting, Functions e Firestore Database (NoSQL)</td>
    </tr>
</table>

## Arquitetura do Projeto

![Project Architecture](UKnow-Architecture.png)

## Modelagem do Banco de Dados
![DB Model](Database-Diagram.png)