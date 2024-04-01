# Smart Games Store

## :mag: Descrição

Bem-vindo ao projeto Smart Games, uma solução para a Smart Games Ltda. que permite aos clientes consultar e comprar jogos online ou na loja.

## :test_tube: Tecnologias Utilizadas:

### Backend:
- **NodeJS:** Ambiente de execução para JavaScript fora do navegador.
- **MySQL:** Sistema de gerenciamento de banco de dados relacional, usado para armazenar dados da aplicação.

### Frontend:

- **JavaScript (ES6+):** Linguagem de programação utilizada para desenvolver a lógica do frontend.
- **React:** Biblioteca JavaScript para construção da interface do usuário.
- **Tailwind CSS:** Framework CSS utilizado para estilizar a aplicação.
- **CSS:** CSS utilizado para estilizar a aplicação.

### Mobile:

- **JavaScript (ES6+):** Linguagem de programação utilizada para desenvolver a lógica do frontend.
- **React Native:** Biblioteca JavaScript para construção da interface do usuário.
- **Expo:** Plataforma que permite o desenvolvimento de aplicativos móveis com React Native, fornecendo ferramentas e serviços adicionais para facilitar o processo de desenvolvimento.ção.

### Ambiente de Desenvolvimento:

- **Node.js:** Ambiente de execução para JavaScript fora do navegador.
- **npm / Yarn:** Gerenciadores de pacotes para instalar, compartilhar e controlar versões de dependências.
- **XAMPP:** Conjunto de softwares que facilita a criação de um servidor web local, incluindo Apache, MySQL, entre outros.

### Ferramentas Adicionais:

- **Git:** Sistema de controle de versão utilizado para gerenciar o código-fonte do projeto.
- **GitHub:** Plataforma de hospedagem de código-fonte e colaboração.

## :computer: Pré-requisitos

### Node.js e npm

- [Baixe e instale o Node.js](https://nodejs.org/en/download/).

### XAMPP (Opcional, utilizei por causa do Servidor MySQL)

- [Baixe e instale o XAMPP](https://www.apachefriends.org/index.html).
- Inicie os servidores Apache e MySQL no XAMPP.

## :gear: Configuração do Projeto

1. **Clonar o Repositório:**
   - Clone o repositório do seu projeto para o seu ambiente local.
   - `git clone https://github.com/Oliveira-Renato/Smart-Games-Store.git`

2. **Configurar o Banco de Dados:**

   - Certifique-se de que o servidor MySQL no XAMPP (ou servidor que preferir) esteja em execução.
   - Configure as informações do banco de dados no arquivo de configuração do seu projeto `server/src/database/db.js`.
   - Certifique-se que o database `smartgamesdb` e a tabela `jogos` estejam criadas.
   - Execute a aplicação `npm run dev`.
  
3. **Instalar Dependências Mobile:**

   - Execute `cd Smart-Games-Store/mobile-SGS` para entrar no diretório clonado.
   - Execute `npm install` no diretório do projeto para instalar as dependências PHP.
   - Em `mobile-SGS/src/services/api.js` altere o enderesso de IP da sua maquina, para corresponder ao servidor local correto.
   - Execute a aplicação `npm start`.
   - Para testar a aplicação mobile será necessário baixar o app `Expo` para android ou IOS (fique a seu critério), ou se preferir emule um dispositivo de sua preferencia.
  
4. **Instalar Dependências Web:**

   - Execute `cd Smart-Games-Store/web-SGS` para entrar no diretório onde se encontra o frontend da apliação.
   - Execute `npm install` ou `yarn install` no diretório do projeto para instalar as dependências do Node.js.
   - Execute a aplicação `npm run dev`.
   - Acesse a aplicação pelo navegador através do endereço local.

5. **Executar a Aplicação:**
   - Após ter feito todos os passos anteriores, dentro do diretório "worklab-desafio":
   * Execute `php artisan migrate` para criar as tabelas, e em seguida `php artisan serve` para iniciar o servidor backend.
   - Dentro do diretório "worklab-frontend":
   - Execute `npm run dev` ou `yarn dev` para iniciar o servidor de desenvolvimento Vite + React.
   - Acesse a aplicação pelo navegador através do endereço local.

### Observações Importantes

- Ajuste as configurações do banco de dados, como nome do banco, usuário `root`, de acordo com suas configurações locais.
- Caso esteja utilizando um ambiente de produção, ajuste as configurações de segurança e utilize um servidor web mais adequado.

Certifique-se de consultar a documentação específica de cada ferramenta e framework para obter informações detalhadas sobre como configurar e executar os projetos.
