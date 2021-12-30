const { Router } = require('express')
const { queries } = require('../graphql/queries')
const { fetchGraphql } = require('../../utils/fetchGraphql')

const router = Router()

router.get('/', async (req, res) => {
  const { data } = await fetchGraphql(queries.recipes())
  res.render('index.pug', { data: data.recipes })
})

router.get('/recipe/:id', async (req, res) => {
  const { data } = await fetchGraphql(queries.recipe(req.params.id))
  res.render('detail.pug', { data: data.recipe })
})

module.exports = {
  router,
}
