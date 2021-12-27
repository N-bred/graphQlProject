const { allRecipesDB } = require('../../db/db')

module.exports = {
  allRecipes: () => {
    return allRecipesDB
  },
}
