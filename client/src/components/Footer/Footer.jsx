import styles from "./Footer.module.css";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";

function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.Logo}>
        <img src="./assets/images/web_logo.jpg" alt="Logo" />
        <div className={styles.Address}>
          <p style={{ fontSize: "1.25rem" }}>ศรีธนาวัฒน์</p>
          <p>
            43/109 หมู่ที่ 5 ซอยสุขาประขาสรรค์ 2 ถนนแจ้งวัฒนะ อำเภอปากเกร็ด
            จังหวัดนนทบุรี 11120
          </p>
        </div>
      </div>
      <div className={styles.Contact}>
        <span className={styles.TextBox}>
          <LocalPhoneRoundedIcon
            style={{ fontSize: "1rem", color: "#DCEAF7" }}
          />
          &nbsp; 02-583-3751
        </span>
        <span className={styles.TextBox}>
          <MailOutlineRoundedIcon
            style={{ fontSize: "1rem", color: "#DCEAF7" }}
          />
          &nbsp; srithanawat.store@gmail.com
        </span>
      </div>

      <div className={styles.BusinessHours}>
        <span className={styles.TextBox}>
          <AccessTimeRoundedIcon
            style={{ fontSize: "1rem", color: "#DCEAF7" }}
          />
          &nbsp; เวลาทำการ
        </span>
        <p>เปิดทำการทุกวัน 8:00 - 19:00 น.</p>
      </div>
    </div>
  );
}

export default Footer;
