# ToDoList Backend

Backend Node.js para o aplicativo ToDoList, utilizando Express e MySQL.

## Requisitos

- Node.js 18+
- Docker e Docker Compose (opcional, recomendado)
- MySQL 8+

## Instalação

### Local

1. Instale as dependências:
   ```sh
   npm install
   ```

2. Configure as variáveis de ambiente (opcional, valores padrão já definidos):

   - `DB_HOST` (padrão: localhost)
   - `DB_USER` (padrão: root)
   - `DB_PASSWORD` (padrão: vazio)
   - `DB_NAME` (padrão: todolist)

3. Inicie o servidor:
   ```sh
   npm start
   ```

### Docker

1. Suba os containers:
   ```sh
   docker-compose up --build
   ```

O backend estará disponível em `http://localhost:3333`.

## Endpoints

- `GET /tasks`  
  Lista todas as tarefas.

- `POST /tasks`  
  Cria uma nova tarefa.  
  Corpo JSON: `{ "title": "Nome da tarefa" }`

- `PUT /tasks/:id`  
  Atualiza uma tarefa existente.  
  Corpo JSON: `{ "title": "Novo título", "status": "pendente|em andamento|concluída" }`

- `DELETE /tasks/:id`  
  Remove uma tarefa.

## Banco de Dados

O banco é inicializado via [init.sql](init.sql).  
Tabela principal: `tasks` com campos `id`, `title`, `status`, `created_at`.

## Deploy Kubernetes

Arquivos de deploy em [k8s/backend/](k8s/backend/):

- [deployment.yaml](k8s/backend/deployment.yaml)
- [service.yaml](k8s/backend/service.yaml)
- [kustomization.yaml](k8s/backend/kustomization.yaml)

## CI/CD

Pipeline automatizado via GitHub Actions em [.github/workflows/ci-cd.yml](.github/workflows/ci-cd.yml).

## Licença

MIT
