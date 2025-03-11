\# To-Do List - Projeto de Faculdade

Este é um projeto de To-Do List desenvolvido como parte de um trabalho
de faculdade. A aplicação consiste em um \*\*frontend\*\* (React) e um
\*\*backend\*\* (Node.js/Express), integrados a um banco de dados
PostgreSQL hospedado no \*\*Neon Console\*\*. O projeto pode ser rodado
localmente ou implantado na \*\*Vercel\*\*.

\## Funcionalidades

\- \*\*Adicionar tarefas\*\*: Adicione novas tarefas à lista.

\- \*\*Listar tarefas\*\*: Visualize todas as tarefas cadastradas.

\- \*\*Excluir tarefas\*\*: Exclua tarefas da lista.

\- \*\*Integração com banco de dados\*\*: As tarefas são armazenadas em
um banco de dados PostgreSQL.

\- \*\*Frontend e backend separados\*\*: O frontend (React) se comunica
com o backend (Node.js) via API REST.

\## Pré-requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

1\. \*\*Node.js\*\* (versão 18 ou superior): \[Baixar
Node.js\](https://nodejs.org/)

2\. \*\*PostgreSQL\*\* (ou acesso a um banco de dados PostgreSQL):
\[Baixar PostgreSQL\](https://www.postgresql.org/)

3\. \*\*Git\*\*: \[Baixar Git\](https://git-scm.com/)

4\. \*\*VSCode\*\* (ou outro editor de código de sua preferência).

\## Passo a Passo para Rodar o Projeto

\### 1. Clone os repositórios

Abra o terminal e execute os seguintes comandos para clonar os
repositórios:

\`\`\`bash

git clone
\[https://github.com/seu-usuario/to-do-list-frontend.git\](https://www.google.com/search?q=https://github.com/seu-usuario/to-do-list-frontend.git)

git clone
\[https://github.com/seu-usuario/to-do-list-backend.git\](https://www.google.com/search?q=https://github.com/seu-usuario/to-do-list-backend.git)

**2. Configure o banco de dados**

**Usando o Neon Console**

1.  Crie um banco de dados no [[Neon
    Console]{.underline}](https://neon.tech/).

2.  Anote as credenciais de conexão (host, usuário, senha, nome do
    banco).

**Usando PostgreSQL local**

1.  Instale o PostgreSQL localmente.

2.  Crie um banco de dados chamado todos.

3.  Crie a tabela todos com o seguinte comando SQL:

\<!\-- end list \--\>

SQL

CREATE TABLE todos (

id SERIAL PRIMARY KEY,

task TEXT NOT NULL,

completed BOOLEAN DEFAULT FALSE

);

**3. Configure o backend**

1.  Navegue até a pasta to-do-list-backend/:

\<!\-- end list \--\>

Bash

cd to-do-list-backend

2.  Crie um arquivo .env na pasta to-do-list-backend/ e adicione as
    credenciais do banco de dados:

\<!\-- end list \--\>

Snippet de código

DB_USER=seu_usuario

DB_PASSWORD=sua_senha

DB_HOST=seu_host

DB_PORT=5432

DB_NAME=seu_banco_de_dados

3.  Instale as dependências:

\<!\-- end list \--\>

Bash

npm install

4.  Inicie o servidor backend:

\<!\-- end list \--\>

Bash

npm start

O servidor estará rodando em http://localhost:8080.

**4. Configure o frontend**

1.  Navegue até a pasta to-do-list-frontend/:

\<!\-- end list \--\>

Bash

cd ../to-do-list-frontend

2.  Instale as dependências:

\<!\-- end list \--\>

Bash

npm install

3.  Inicie o servidor de desenvolvimento:

\<!\-- end list \--\>

Bash

npm start

O frontend estará rodando em http://localhost:3000.

**5. Teste a aplicação**

1.  Abra o navegador e acesse http://localhost:3000.

2.  Adicione, liste e exclua tarefas.

**Estrutura do Projeto**

**Backend (to-do-list-backend/)**

to-do-list-backend/

├── src/

│ ├── index.js \# Ponto de entrada do backend

│ └── \... \# Outros arquivos do backend

├── package.json \# Dependências do backend

├── .env \# Variáveis de ambiente do backend

└── vercel.json \# Configurações de deploy do Vercel

**Frontend (to-do-list-frontend/)**

to-do-list-frontend/

├── src/

│ ├── App.js \# Componente principal do frontend

│ ├── index.js \# Ponto de entrada do frontend

│ └── \... \# Outros arquivos do frontend

├── package.json \# Dependências do frontend

└── .env \# Variáveis de ambiente do frontend

**Como Contribuir**

1.  Faça um fork do repositório.

2.  Crie uma branch para sua feature (git checkout -b
    feature/nova-feature).

3.  Commit suas mudanças (git commit -m \'Adiciona nova feature\').

4.  Push para a branch (git push origin feature/nova-feature).

5.  Abra um Pull Request.

**Deploy na Vercel**

**Backend**

1.  Navegue até a pasta to-do-list-backend/ e execute:

\<!\-- end list \--\>

Bash

vercel \--prod

2.  Siga as instruções para configurar o deploy.

**Frontend**

1.  Navegue até a pasta to-do-list-frontend/ e execute:

\<!\-- end list \--\>

Bash

vercel \--prod

2.  Siga as instruções para configurar o deploy.

**Tecnologias Utilizadas**

- **Frontend**: React, Axios

- **Backend**: Node.js, Express, PostgreSQL

- **Banco de Dados**: Neon Console (PostgreSQL)

- **Deploy**: Vercel

**Autores**

- [[https://github.com/Pedroviz]{.underline}](https://github.com/Pedroviz) -
  matricula 2323832

- [[https://github.com/millenebrj95]{.underline}](https://github.com/millenebrj95) -
  matricula 2326165

- [[João Eduardo Lucio Araujo]{.underline}](https://github.com/DuDu0133) - matricula 2318859

- [[Nome do Colega]{.underline}](https://github.com/colega)

**Licença**

Este projeto está licenciado sob a licença MIT. Veja o arquivo
[[LICENSE]{.underline}](https://license/) para mais detalhes.

**Agradecimentos**

- Aos colegas de grupo pela colaboração.

Se tiver alguma dúvida ou problema, sinta-se à vontade para abrir uma
[[issue]{.underline}](https://www.google.com/url?sa=E&source=gmail&q=https://github.com/seu-usuario/to-do-list/issues)
no repositório.
