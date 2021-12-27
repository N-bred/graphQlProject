const { buildSchema } = require('graphql')

module.exports = {
  recipeSchema: buildSchema(`
    type Query {
        id: Int,
        name: String,
        ingredients: [String],
        image: String
    }
`),
}
