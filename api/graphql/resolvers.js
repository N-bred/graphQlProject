const { Recipes } = require('../../db/db')

const resolvers = {
  Query: {
    recipes: () => Recipes,
  },
}

module.exports = { resolvers }
