# Users microservice

### Migrations

If You want to generate the migration run: `npx sequelize-cli migration:generate --name <NAME_OF_MIGRATION>`

#### Used Technologies:

- Express
- Typescript
- Docker
- Eslint + Prettier
- winston (logging)

#### Available commands

- `npm start` - starts server locally with hot reload
- `npm run build` - compile TS into JS and creates dist folder
- `npm run lint` - lints the code
- `npm run test` - runs tests once
- `npm rut test:watch` - runs tests in watch mode
- `npm run migrate:prod` - runs the migration for prod environment
- `npm run migrate:dev` - runs the migration for dev environment

### Environment Variables

- AMQP_URL - The address to amqp server, default: `amqp://localhost`
