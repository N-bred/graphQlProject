const { allRecipesDB } = require('../../db/db')

module.exports = {
  recipe: (id) => {
    return allRecipesDB[id]
  },
}
