import styles from "./ServicesPage.module.css";
import CheckroomRoundedIcon from "@mui/icons-material/CheckroomRounded";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
function ServicesPage() {
  return (
    <div className={styles.PageContainer}>
      <h1>บริการของเรา</h1>
      <div className={styles.BoxContainer}>
        <div id={styles.box1} className={styles.Box}>
          <h2>ซ่อมประปา</h2>
          <div className={styles.Circle}>
            <BuildRoundedIcon style={{ fontSize: "2.4rem" }} />
          </div>
          <p>รับซ่อมปั๊มน้ำ เดินท่อประปา ติดตั้งปั๊มน้ำ สปริงเกอร์</p>
        </div>

        <div id={styles.box2} className={styles.Box}>
          <h2>ตัดท่อ & ต๊าปเกลียว</h2>
          <div className={styles.Circle}>
            <SettingsSuggestRoundedIcon
              style={{
                fontSize: "2.4rem",
                marginBottom: "0.4rem",
                color: "#f8fcfe",
              }}
            />
          </div>
          <p>รับตัดท่อประปาตามความยาวที่ท่านต้องการ และรับต๊าปเกลียวท่อประปา</p>
        </div>

        <div id={styles.box3} className={styles.Box}>
          <h2>ทำราวตากผ้า</h2>
          <div className={styles.Circle}>
            <CheckroomRoundedIcon
              style={{ fontSize: "2.4rem", marginBottom: "0.4rem" }}
            />
          </div>
          <p>รับทำราวตากผ้าจากท่อ PVC หรือท่อเหล็ก</p>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
