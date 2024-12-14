# 🚀 Desafio API Rest com Nest.js, MongoDB e Docker

Este projeto é uma aplicação **Nest.js** conectada ao **MongoDB** com **Prisma ORM**. O ambiente é configurado para rodar com **Docker** e **Docker Compose**, e a API expõe 4 rotas REST.

---

## **📝 Funcionalidades**

### **Rotas da API**
| Método | Rota             | Descrição                 |
|--------|------------------|---------------------------|
| `GET`  | `/api/assets`    | Lista todos os assets     |
| `POST` | `/api/assets`    | Cria um novo asset        |
| `GET`  | `/api/orders`    | Lista todas as orders     |
| `POST` | `/api/orders`    | Cria uma nova order       |

---

## **⚙️ Estrutura dos Dados**

### **Asset**
- `id` (string): Informado pelo usuário.
- `symbol` (string): Símbolo do ativo.

Exemplo de Asset no `POST /api/assets`:

```json
{
  "id": "asset-001",
  "symbol": "AAPL"
}
```

### **Order**

- `id`: Gerado automaticamente pelo banco.
- `asset_id` (string): Relacionado a um Asset.
- `price` (number): Preço da ordem.
- `status` (string): Valores aceitos são open, pending, ou closed (não pode ser - informado no POST).

```json
{
  "asset_id": "asset-001",
  "price": 150.00
}
```

## 🛠️ Tecnologias Utilizadas
- Nest.js: Framework para Node.js.
- MongoDB: Banco de dados NoSQL.
- Prisma ORM: Gerenciamento do banco de dados.
- Docker e Docker Compose: Para ambiente containerizado.

## ⚙️ Pré-requisitos
Antes de iniciar o projeto, certifique-se de ter instalado:

- **Docker**
- **Docker Compose**

## 🚀 Como Rodar o Projeto
1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/nestjs-api-challenge.git
cd nestjs-api-challenge
```

2. Configure as variáveis de ambiente
Crie um arquivo .env com base no arquivo .env.example fornecido:

```bash
cp .env.example .env
```

Exemplo de .env:

```bash
DATABASE_URL="mongodb://root:root@db:27017/mydatabase"
```

3. Suba o projeto com Docker Compose
Execute o seguinte comando para construir e iniciar os containers:

```bash
docker-compose up --build
```

## 📄 Testando as Rotas
Utilize o arquivo api.http para testar as chamadas HTTP diretamente no VSCode ou em ferramentas como Insomnia e Postman.

Exemplos de api.http

```bash
### Listar Assets
GET http://localhost:3000/api/assets

### Criar Asset
POST http://localhost:3000/api/assets
Content-Type: application/json

{
  "id": "asset-001",
  "symbol": "AAPL"
}

### Listar Orders
GET http://localhost:3000/api/orders

### Criar Order
POST http://localhost:3000/api/orders
Content-Type: application/json

{
  "asset_id": "asset-001",
  "price": 150.00
}
```

## 🖥️ Estrutura do Projeto

```plaintext
nestjs-api-challenge/
├── prisma/                 # Configuração do Prisma e gerador do cliente
│   ├── schema.prisma       # Definição do modelo de banco de dados
├── src/                    # Código-fonte do projeto
│   ├── assets/             # Módulo de assets
│   ├── orders/             # Módulo de orders
│   ├── app.module.ts       # Módulo principal do Nest.js
│   ├── main.ts             # Arquivo de inicialização
├── .dockerignore           # Arquivos ignorados no Docker
├── .env.example            # Exemplo de variáveis de ambiente
├── Dockerfile              # Configuração do Docker
├── docker-compose.yml      # Configuração do Docker Compose
├── api.http                # Exemplo de chamadas HTTP
├── package.json            # Dependências do projeto
└── README.md               # Documentação
```

## 🧑‍💻 Autor
- Desenvolvido por **Alexandre Noguez**
- 🔗 [LinkedIn](https://www.linkedin.com/in/alexandre-noguez/)