exports.Category = {
  products: ({ id: categoryId }, { filter }, { products }) => {
    const categoryProducts = products.filter((product) => product.categoryId === categoryId)
    let filteredCategoryProducts = categoryProducts

    if (filter) {
      if (filter.onSale) filteredCategoryProducts = categoryProducts.filter(product => product.onSale)
    }

    return filteredCategoryProducts
  }
}