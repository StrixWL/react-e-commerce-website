import productsList from "../../data/products.js"

const prodcuts = ((req, res) => {
  const productId = req.params.id;
  if (productId)
    res.json(productsList[productId])
  else
    res.json(productsList)
})

export default prodcuts;