export default function ProductCard({ products }) {
  return (
    <ul className="products-container">
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product) => (
          <li key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <div className="products-details">
              <div className="about-product">
                <h3 className="product-title">{product.title}</h3>
                <p>
                  <span>Sign in</span> or Create an account to see pricing
                </p>
              </div>
              <img
                src="/heart.png"
                alt="like"
                height={20}
                width={20}
                priority
                style={{ cursor: "pointer" }}
                className="like-icon"
              />
            </div>
          </li>
        ))
      ) : (
        <p>No products available.</p>
      )}
    </ul>
  );
}
