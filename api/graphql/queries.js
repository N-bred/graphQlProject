const queries = {
  recipes: () => `
        {
            recipes {
                id,
                name,
                images
            }
        }
    `,
  recipe: (id) => `
        {
            recipe(id: ${id}) {
                id,
                name,
                ingredients,
                images,
                resume
            }
        }
    `,
}

module.exports = { queries }
