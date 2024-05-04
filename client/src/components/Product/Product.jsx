import { useState } from "react";
import ProductDetails from "../ProductDetails/ProductDetails";
import styles from "./Product.module.css";

function Product({ product }) {
  const [showDetails, setShowDetails] = useState(false);

  const closeDetails = () => {
    setShowDetails(false);
  };

  return (
    <>
      <div className={styles.product} onClick={() => setShowDetails(true)}>
        <div className={styles.overlay}>
          <div className={styles.image}>
            <img
              src={product.image_url}
              alt={product.name}
              onError={({ target }) =>
                (target.src = `${process.env.PUBLIC_URL}/assets/images/no_img.jpg`)
              }
            />
          </div>
          <div className={styles.view}>
            <div className={styles.text}>Click to view</div>
          </div>
        </div>
        <p className={styles.productName}>{product.name}</p>
        <p className={styles.productPrice}>{`฿${product.price || " -"}`}</p>
      </div>
      {showDetails && (
        <ProductDetails product={product} closeDetails={closeDetails} />
      )}
    </>
  );
}

export default Product;
