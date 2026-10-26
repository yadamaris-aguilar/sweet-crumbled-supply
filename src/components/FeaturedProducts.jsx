import { useState } from 'react'
import Product from './Product'
import ProductAdd from './ProductAdd'

function FeaturedProducts() {
const [products, setProducts] = useState([
{ id: 1, image: './img/dough_scraper.webp', name: 'Dough Scraper', price: 9.99, rating: 5 },
{ id: 2, image: './img/pans.webp', name: 'Bundt Cake Pans', price: 59.95, rating: 4 },
{ id: 3, image: './img/roller.webp', name: 'Dough Roller', price: 15.99, rating: 4 },
{ id: 4, image: './img/spatula.webp', name: 'Decorating Spatula', price: 6.99, rating: 5 },
])

const [cart, setCart] = useState({})
const [nextId, setNextId] = useState(5)
const handleProductAdd = (product) => {
const newProduct = {
    ...product,
    id: nextId
  }

  setProducts([...products, newProduct])
  setNextId(nextId + 1)
}

const addToCart = (productId) => {
setCart({
...cart,
[productId]: (cart[productId] || 0) + 1
})
}

const removeFromCart = (productId) => {
setCart({
...cart,
[productId]: Math.max((cart[productId] || 0) - 1, 0)
})
}
const handleProductDelete = (productId) => {
  const newProducts = products.filter((product) => {
    return product.id !== productId
  })

  setProducts(newProducts)

  setCart((currentCart) => {
    const newCart = { ...currentCart }
    delete newCart[productId]
    return newCart
  })
}

const totalCount = products.reduce((total, product) => {
return total + (cart[product.id] || 0)
}, 0)

const totalPrice = products.reduce((total, product) => {
return total + product.price * (cart[product.id] || 0)
}, 0)


return (
  <>
    <section className="container py-5" id="products-featured">
      <div className="row">
        <h2 className="col-12 mb-3">Featured Products</h2>
        <p className="col-12">Items in Cart: {totalCount}</p>
        <p className="col-12">Total: ${totalPrice.toFixed(2)}</p>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            cartCount={cart[product.id] || 0}
            onAdd={() => addToCart(product.id)}
            onRemove={() => removeFromCart(product.id)}
            onDelete={() => handleProductDelete(product.id)}
          />
        ))}
      </div>
    </section>

    <ProductAdd onProductAdd={handleProductAdd} />
  </>
)
}

export default FeaturedProducts
