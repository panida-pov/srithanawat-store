import styles from "./ProductsPage.module.css";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState } from "react";
import Tag from "../../components/Tag/Tag";

function ProductsPage() {
  // -- Product category/price/brand to be displayed --
  const categories = [
    "สินค้าทั้งหมด",
    "ท่อประปา",
    "ข้อต่อ",
    "ข้องอ",
    "ก๊อกน้ำ/วาล์ว",
    "สุขภัณฑ์",
    "อุปกรณ์ไฟฟ้า",
    "วัสดุก่อสร้าง",
    "อื่นๆ",
  ];

  const prices = [
    {
      min: 1,
      max: 10,
    },
    {
      min: 10,
      max: 20,
    },
    {
      min: 20,
      max: null,
    },
  ];

  const brands = ["ท่อน้ำไทย", "SCG"];
  // -------------------------------------------------

  const [selectCategory, setSelectCategory] = useState("");
  const renderCategories = () => {
    return categories.map((category) => {
      return (
        <li
          key={category}
          onClick={() => setSelectCategory(category)}
          className={category === selectCategory ? styles.activeList : ""}
        >
          <span className={styles.Waterdrop}>
            <WaterDropIcon
              style={{ fontSize: "1rem", marginRight: "0.25rem" }}
            />
          </span>
          {category}
        </li>
      );
    });
  };

  const [selectPrice, setSelectPrice] = useState([]);
  const handleSelectPrice = ({ target }) => {
    const selected = JSON.parse(target.value);
    const found = selectPrice.some(
      ({ min, max }) => min === selected.min && max === selected.max
    );
    if (found) {
      setSelectPrice(
        selectPrice.filter(
          ({ min, max }) => min !== selected.min && max !== selected.max
        )
      );
    } else {
      setSelectPrice((prev) => [...prev, selected]);
    }
  };
  const renderPrices = () => {
    return prices.map(({ min, max }, index) => {
      return (
        <div className={styles.Checklist} key={index}>
          <label>
            <input
              type="checkbox"
              value={JSON.stringify({ min, max })}
              onClick={handleSelectPrice}
            />
            {`฿${min ?? ""}~${max ?? ""}`}
          </label>
        </div>
      );
    });
  };

  const [selectBrand, setSelectBrand] = useState([]);
  const handleSelectBrand = ({ target }) => {
    const found = selectBrand.some((brand) => brand === target.value);
    if (found) {
      setSelectBrand(selectBrand.filter((brand) => brand !== target.value));
    } else {
      setSelectBrand((prev) => [...prev, target.value]);
    }
  };

  const renderBrands = () => {
    return brands.map((brand) => {
      return (
        <div className={styles.Checklist} key={brand}>
          <label>
            <input type="checkbox" value={brand} onClick={handleSelectBrand} />
            {brand}
          </label>
        </div>
      );
    });
  };

  return (
    <div className={styles.ProductPage}>
      <div className={styles.FilterContainer}>
        <div className={styles.FilterBox}>
          <h2>
            <ShoppingCartOutlinedIcon
              style={{
                fontSize: "1.2rem",
                marginRight: "0.25rem",
                verticalAlign: "middle",
              }}
            ></ShoppingCartOutlinedIcon>
            หมวดหมู่สินค้า
          </h2>
          <ul>{renderCategories()}</ul>
        </div>
        <div className={styles.FilterBox}>
          <h2>ราคา</h2>
          {renderPrices()}
        </div>
        <div className={styles.FilterBox}>
          <h2>แบรนด์</h2>
          {renderBrands()}
        </div>
      </div>

      <div className={styles.Content}>
        <h1>สินค้าของเรา</h1>
        <Tag selectBrand={selectBrand} selectPrice={selectPrice} />
      </div>
    </div>
  );
}

export default ProductsPage;
