import styles from "../styles/Product.module.css";

export default function Product({ product }) {
  return (
    <div key={product.id} className={styles.card}>
      {product.images[0] ? (
        <img src={product.images[0].url} alt={`Preview of ${product.name}`} />
      ) : (
        <span>No Image Found</span>
      )}
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <p>
        <button
          className="snipcart-add-item"
          data-item-id={product.id}
          data-item-image={product.images[0].url}
          data-item-name={product.name}
          data-item-url="/"
          data-item-price={product.price}
          data-item-max-quantity={product.quantity}
        >
          Add to Cart
        </button>
      </p>
    </div>
  );
}
