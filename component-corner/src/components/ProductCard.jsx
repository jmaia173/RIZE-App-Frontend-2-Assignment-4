import "./ProductCard.css";

function ProductCard({ product, onAddToCart }) {
  const { name, price, image, description } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className="product-price">${price}</p>
      <p className="product-description">{description}</p>
      <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;