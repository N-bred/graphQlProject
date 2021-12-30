const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const { router } = require('./api/router/router')
const { typeDefs } = require('./api/graphql/typeDefs')
const { resolvers } = require('./api/graphql/resolvers')
const PORT = 3000

const app = express()

//Config
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.set('public', './public')
app.set('views', './views')
app.set('view engine', 'pug')

// Apollo init

let apolloServer = null
async function startServer() {
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  })
  await apolloServer.start()
  apolloServer.applyMiddleware({ app })
}

startServer()

app.listen(PORT, (err) => {
  console.log(`Running on port ${PORT} at http://localhost:${PORT}`)
  console.log(`gql path is ${apolloServer.graphqlPath}`)
})
