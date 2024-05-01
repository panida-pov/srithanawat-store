import styles from "./Product.module.css";

function Product() {
  const sample = {
    id: 1,
    name: "ข้องอ 90 องศา 1 นิ้ว",
    category: "ข้อต่อPVC",
    color: "สีฟ้า",
    brand: "ท่อน้ำไทย",
    price: 12,
    details: "หนา 1 นิ้ว",
    image_url: "./assets/images/product_1.jpg",
  };

  return (
    <div className={styles.product}>
      <div className={styles.overlay}>
        <div className={styles.image}>
          <img src={sample.image_url} alt={sample.name} />
        </div>
        <div className={styles.view}>
          <div className={styles.text}>Click to view</div>
        </div>
      </div>
      <p className={styles.productName}>{sample.name}</p>
      <p className={styles.productPrice}>{`฿${sample.price.toFixed(2)}`}</p>
    </div>
  );
}

export default Product;
