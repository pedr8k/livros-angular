
# livros-angular

Projeto Angular para gerenciamento de livros, com funcionalidades de listagem e cadastro.

## Descrição

Este projeto é uma aplicação web construída com Angular, que permite listar livros, adicionar novos registros e gerenciar editoras e autores. Foi desenvolvido como parte do estudo e prática do framework Angular.

## Funcionalidades

- Listar livros cadastrados
- Cadastrar novos livros com título, resumo, autores e editora
- Navegação entre as páginas usando Angular Router
- Formulário com validação básica usando Angular Forms
- Uso de serviços para controle dos dados (editoras e livros)

## Tecnologias Utilizadas

- Angular
- TypeScript
- Bootstrap (para estilização)
- Git e GitHub para controle de versão

## Como rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/pedr8k/livros-angular.git
```

2. Entre na pasta do projeto:

```bash
cd livros-angular
```

3. Instale as dependências:

```bash
npm install
```

4. Execute a aplicação:

```bash
ng serve
```

5. Acesse no navegador:

```
http://localhost:4200
```

## Estrutura do projeto

- `src/app/livro-lista.component.ts` - Componente para listar livros
- `src/app/livro-dados.component.ts` - Componente para cadastro e edição de livros
- `src/app/controle-editora.service.ts` - Serviço para gerenciamento das editoras
- `src/app/controle-livros.service.ts` - Serviço para gerenciamento dos livros
- `src/app/app-routing.module.ts` - Configuração de rotas
- `src/app/app.module.ts` - Módulo principal da aplicação

## Contribuição

Contribuições são bem-vindas! Abra uma issue ou envie um pull request.
