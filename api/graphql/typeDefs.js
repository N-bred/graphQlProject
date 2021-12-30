const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Recipe {
    id: Int
    name: String
    ingredients: [String]
    images: [String]
  }

  type Query {
    recipes: [Recipe]
  }
`

module.exports = { typeDefs }
