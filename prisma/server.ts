import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { context } from './context';
import { schema } from './schema';

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    context: context,
    graphiql: true,
  }),
);

app.listen(4000);
console.log(`\
🚀 Server ready at: http://localhost:4000/graphql
⭐️ See sample queries: http://pris.ly/e/ts/graphql-express-sdl-first#using-the-graphql-api
`);
