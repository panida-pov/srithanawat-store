import styles from "./NavBar.module.css";
import logo from "../../assets/images/web_logo.jpg";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import { useState } from "react";

function NavBar() {
  const navList = {
    home: "หน้าแรก",
    products: "สินค้า",
    services: "บริการ",
    contact: "ติดต่อเรา",
  };

  const [currentPage, setCurrentPage] = useState("home");

  const handleClick = (event) => {
    setCurrentPage(event.target.id);
  };

  const handleNavStyle = (key) => {
    return key === currentPage ? styles.active : "";
  };

  const renderNav = () => {
    return Object.keys(navList).map((navEng) => {
      return (
        <li
          key={navEng}
          id={navEng}
          onClick={handleClick}
          className={handleNavStyle(navEng)}
        >
          {navList[navEng]}
          <br />
          {navEng.toUpperCase()}
        </li>
      );
    });
  };

  return (
    <div className={styles.Header}>
      <div className={styles.Logo}>
        <img src={logo} alt="Logo" />
        <div className={styles.StoreName}>
          <h1>ศรีธนาวัฒน์</h1>
          <h2>SRITHANAWAT</h2>
        </div>
      </div>
      <div className={styles.NavContainer}>
        <div className={styles.Telephone}>
          <LocalPhoneRoundedIcon style={{ fontSize: "1.2rem" }} />
          <p>02-583-3751</p>
        </div>
        <div className={styles.Nav}>
          <ul>{renderNav()}</ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
