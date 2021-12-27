const { buildSchema } = require('graphql')

module.exports = {
  allRecipesSchema: buildSchema(`
    type Query {
        recipes: [Query]
    }
`),
}
