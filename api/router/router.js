const { Router } = require('express')
const { recipe } = require('../controllers/recipes.controller')
const { allRecipes } = require('../controllers/allrecipes.controller')

const router = Router()

router.get('/', (req, res) => {
  const data = allRecipes()
  res.render('index.pug', { data })
})

router.get('/recipe/:id', (req, res) => {
  res.render('detail.pug', { data: recipe(parseInt(req.params.id)) })
})

module.exports = {
  router,
}
