const { products, categories } = require("../db")

exports.Query = {
  hello: (parent, args, context) => {
    return 'World!'
  },
  products: (parent, args, context) => {
    return products
  },
  product: (parent, args, context) => {
    const { id } = args
    return products.find((product) => product.id === id)
  },
  categories: (parent, args, context) => categories,
  category: (parent, args, context) => {
    const { id } = args
    return categories.find((category) => category.id === id)
  }
}