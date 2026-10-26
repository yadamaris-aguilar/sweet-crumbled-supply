import { useState } from 'react'
export default function ProductAdd({
  onProductAdd
}) {
  const [nameInput, setNameInput] = useState('')
  const [imageInput, setImageInput] = useState('')
  const [priceInput, setPriceInput] = useState('')
  const [ratingInput, setRatingInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const product = {
      name: nameInput,
      image: imageInput,
      price: parseFloat(priceInput),
      rating: parseInt(ratingInput)
    }

    onProductAdd(product)

    setNameInput('')
    setImageInput('')
    setPriceInput('')
    setRatingInput('')
  }

  return (
    <section className="container pb-5" id="add-product">
      <h2 className="mb-4">Add a Product</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Product Name
          </label>
          <input
            id="productName"
            type="text"
            className="form-control"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
        </div>

        
<div className="mb-3">
  <label htmlFor="productImage" className="form-label">
    Product Image URL
  </label>
  <input
    id="productImage"
    type="url"
    className="form-control"
    placeholder="https://example.com/image.jpg"
    value={imageInput}
    onChange={(e) => setImageInput(e.target.value)}
    required
  />
</div>


        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Price
          </label>
          <input
            id="productPrice"
            type="number"
            min="0"
            step="0.01"
            className="form-control"
            value={priceInput}
            onChange={(e) => setPriceInput(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="productRating" className="form-label">
            Rating (1–5)
          </label>
          <input
            id="productRating"
            type="number"
            min="1"
            max="5"
            className="form-control"
            value={ratingInput}
            onChange={(e) => setRatingInput(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </section>
  )
}