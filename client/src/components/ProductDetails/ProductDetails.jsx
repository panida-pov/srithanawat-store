import styles from "./ProductDetails.module.css";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";

function ProductDetails(props) {
  return (
    <div className={styles.overlay}>
      <div className={styles.box}>
        <button
          type="button"
          className={styles.button}
          onClick={props.closeDetails}
        >
          <DisabledByDefaultIcon style={{ fontSize: "1.8rem" }} />
        </button>
        <div className={styles.image}>
          <img
            src={props.product.image_url}
            onError={({ target }) => {
              target.src = `${process.env.PUBLIC_URL}/assets/images/no_img.jpg`;
            }}
            alt={props.product.name}
          />
        </div>
        <div className={styles.details}>
          <p>ชื่อสินค้า</p>
          <h3>{props.product.name}</h3>
          <p>รายละเอียด</p>
          <h3>{props.product.details}</h3>
          <p>สี</p>
          <h3>{props.product.color}</h3>
          <p>ยี่ห้อ</p>
          <h3>{props.product.brand}</h3>
          <p>ราคา</p>
          <h3>{`฿${props.product?.price}`}</h3>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
