import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { schema } from './schema'
import { context } from './context'

const app = express()

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    context,
    graphiql: true
  })
)

app.listen(3333)

console.log('🚀 Server ready at: http://localhost:3333/graphql')
