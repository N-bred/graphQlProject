const express = require('express')
const path = require('path')
const PORT = 3000
const { router } = require('./router/router')
const app = express()
app.use(router)
app.use('/public', express.static(path.join(__dirname, '../public')))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.set('views', './views')
app.set('view engine', 'pug')

app.listen(PORT, (err) => {
  console.log(`Running on port ${PORT} at http://localhost:${PORT}`)
})
