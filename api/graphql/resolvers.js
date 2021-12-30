const { Recipes } = require('../../db/db')

const resolvers = {
  Query: {
    recipes: () => Recipes,
    recipe: (_, { id }) => Recipes.find((item) => item.id === id),
  },
}

module.exports = { resolvers }
