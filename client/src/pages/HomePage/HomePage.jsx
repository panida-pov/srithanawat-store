import styles from "./HomePage.module.css";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.Banner}>
        <div className={styles.TextContainer}>
          <h1>
            ไว้ใจเรา... เรื่อง <span className={styles.highlight}>"ประปา"</span>
          </h1>
          <div className={styles.TextBox}>
            <CheckCircleOutlinedIcon />
            <p>
              จำหน่ายท่อประปา อุปกรณ์ประปา วัสดุก่อสร้าง อุปกรณ์ไฟฟ้า และ
              อื่นๆอีกมากมาย
            </p>
          </div>
          <div className={styles.TextBox}>
            <CheckCircleOutlinedIcon />
            <p>
              มีบริการซ่อมประปาโดย &nbsp;
              <span
                style={{
                  textDecoration: "underline",
                  textUnderlineOffset: "0.5rem",
                  fontSize: "1.6rem",
                }}
              >
                ช่างมืออาชีพ
              </span>
            </p>
          </div>
          <div className={styles.TextBox}>
            <LocalPhoneRoundedIcon />
            <p>
              สนใจติดต่อ &nbsp;
              <span style={{ fontSize: "1.6rem", fontWeight: "600" }}>
                02-583-3751
              </span>
            </p>
          </div>

          <div className={styles.Button}>
            <button onClick={() => navigate("/products")}>สินค้า</button>
            <button onClick={() => navigate("/services")}>บริการ</button>
          </div>
        </div>

        <div className={styles.ImgContainer}>
          <img
            src="./srithanawat-store/assets/images/banner_1.jpg"
            alt="banner img"
          ></img>
        </div>
      </div>
    </>
  );
}

export default HomePage;
