const fetch = require('node-fetch')
const { graphqlURL } = require('../constants')

const fetchGraphql = async (query, variables = {}) => {
  const req = await fetch(graphqlURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  return req.json()
}

module.exports = { fetchGraphql }
