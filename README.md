**To-Do List - Projeto de Faculdade**

Este é um projeto de To-Do List desenvolvido como parte de um trabalho
de faculdade. A aplicação consiste em um **frontend** (React) e
um **backend** (Node.js/Express), integrados a um banco de dados
PostgreSQL hospedado no **Neon Console**. O projeto pode ser rodado
localmente ou deployado na **Vercel**.

**Funcionalidades**

- **Adicionar tarefas**: Adicione novas tarefas à lista.

- **Listar tarefas**: Visualize todas as tarefas cadastradas.

- **Integração com banco de dados**: As tarefas são armazenadas em um
  banco de dados PostgreSQL.

- **Frontend e backend separados**: O frontend (React) se comunica com o
  backend (Node.js) via API REST.

**Pré-requisitos**

Antes de rodar o projeto, certifique-se de ter instalado:

1.  **Node.js** (versão 18 ou superior): [[Baixar
    Node.js]{.underline}](https://nodejs.org/)

2.  **PostgreSQL** (ou acesso a um banco de dados PostgreSQL): [[Baixar
    PostgreSQL]{.underline}](https://www.postgresql.org/)

3.  **Git**: [[Baixar Git]{.underline}](https://git-scm.com/)

4.  **VSCode** (ou outro editor de código de sua preferência).

**Passo a Passo para Rodar o Projeto**

**1. Clone o repositório**

Abra o terminal e execute o seguinte comando para clonar o repositório:

bash

git clone https://github.com/seu-usuario/to-do-list.git

cd to-do-list

**2. Configure o banco de dados**

**Usando o Neon Console**

1.  Crie um banco de dados no [[Neon
    Console]{.underline}](https://neon.tech/).

2.  Anote as credenciais de conexão (host, usuário, senha, nome do
    banco).

**Usando PostgreSQL local**

1.  Instale o PostgreSQL localmente.

2.  Crie um banco de dados chamado todos.

3.  Crie a tabela todos com o seguinte comando SQL:

> sql
>
> CREATE TABLE todos (
>
> id SERIAL PRIMARY KEY,
>
> task TEXT NOT NULL,
>
> completed BOOLEAN DEFAULT FALSE
>
> );

**3. Configure o backend**

1.  Navegue até a pasta backend/:

> bash
>
> cd backend

2.  Crie um arquivo .env na pasta backend/ e adicione as credenciais do
    banco de dados:

> env
>
> DB_USER=seu_usuario
>
> DB_PASSWORD=sua_senha
>
> DB_HOST=seu_host
>
> DB_PORT=5432
>
> DB_NAME=seu_banco_de_dados

3.  Instale as dependências:

> bash
>
> npm install

4.  Inicie o servidor backend:

> bash
>
> npm start
>
> O servidor estará rodando em http://localhost:5000.

**4. Configure o frontend**

1.  Navegue até a pasta frontend/:

> bash
>
> cd ../frontend

2.  Instale as dependências:

> bash
>
> npm install

3.  Inicie o servidor de desenvolvimento:

> bash
>
> npm start
>
> O frontend estará rodando em http://localhost:3000.

**5. Teste a aplicação**

1.  Abra o navegador e acesse http://localhost:3000.

2.  Adicione novas tarefas e verifique se elas são salvas no banco de
    dados.

**Estrutura do Projeto**

to-do-list/

├── backend/

│ ├── src/

│ │ ├── index.js \# Ponto de entrada do backend

│ │ └── \... \# Outros arquivos do backend

│ ├── package.json \# Dependências do backend

│ └── .env \# Variáveis de ambiente do backend

├── frontend/

│ ├── src/

│ │ ├── App.js \# Componente principal do frontend

│ │ ├── index.js \# Ponto de entrada do frontend

│ │ └── \... \# Outros arquivos do frontend

│ ├── package.json \# Dependências do frontend

│ └── .env \# Variáveis de ambiente do frontend

├── .gitignore \# Arquivos ignorados pelo Git

└── README.md \# Este arquivo

**Como Contribuir**

1.  Faça um fork do repositório.

2.  Crie uma branch para sua feature (git checkout -b
    feature/nova-feature).

3.  Commit suas mudanças (git commit -m \'Adiciona nova feature\').

4.  Push para a branch (git push origin feature/nova-feature).

5.  Abra um Pull Request.

**Deploy na Vercel**

**Backend**

1.  Navegue até a pasta backend/ e execute:

> bash
>
> vercel

2.  Siga as instruções para configurar o deploy.

**Frontend**

1.  Navegue até a pasta frontend/ e execute:

> vercel

2.  Siga as instruções para configurar o deploy.

**Tecnologias Utilizadas**

- **Frontend**: React, Axios

- **Backend**: Node.js, Express, PostgreSQL

- **Banco de Dados**: Neon Console (PostgreSQL)

- **Deploy**: Vercel

**Autores**

- [https://github.com/Pedroviz]{.underline}

- [[Nome do Colega]{.underline}](https://github.com/colega)

- [[Nome do Colega]{.underline}](https://github.com/colega)

**Licença**

Este projeto está licenciado sob a licença MIT. Veja o
arquivo [[LICENSE]{.underline}](https://license/) para mais detalhes.

**Agradecimentos**

- Aos colegas de grupo pela colaboração.

Se tiver alguma dúvida ou problema, sinta-se à vontade para abrir
uma [issue]{.underline} no repositório.
