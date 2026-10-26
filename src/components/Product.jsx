function Product({ product, cartCount, onAdd, onRemove, onDelete }) {
return (
<div className="col">
<div className="card h-100">
<img
       src={product.image}
       className="card-img-top product-img"
       alt={product.name}
     />

    <div className="card-body">
      <h3 className="card-title h5">{product.name}</h3>

      <p className="card-text">
        Price: ${product.price.toFixed(2)}
      </p>

      <p className="card-text rating">
        {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
      </p>

      <div className="d-flex align-items-center gap-2 mb-3">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={onRemove}
        >
          -
        </button>

        <span>{cartCount}</span>

        <button
          type="button"
          className="btn btn-primary"
          onClick={onAdd}
        >
          +
        </button>
      </div>

      <button
        type="button"
        className="btn btn-danger"
        onClick={onDelete}
      >
        Delete
      </button>
    </div>
  </div>
</div>

)
}

export default Product