const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Recipe {
    id: Int
    name: String
    ingredients: [String]
    images: [String]
    resume: String
  }

  type Query {
    recipes: [Recipe]
    recipe(id: Int!): Recipe
  }
`

module.exports = { typeDefs }
