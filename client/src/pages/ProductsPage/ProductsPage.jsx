import styles from "./ProductsPage.module.css";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState } from "react";
import Tag from "../../components/Tag/Tag";
import Checkbox from "../../components/Checkbox/Checkbox";
import Searchbar from "../../components/Searchbar/Searchbar";
import Product from "../../components/Product/Product";

function ProductsPage() {
  // -- Product category/price/brand to be displayed --
  const categories = [
    "สินค้าทั้งหมด",
    "ท่อPVC",
    "ข้อต่อPVC",
    "ฝาครอบ",
    "ก๊อกน้ำ/วาล์ว",
    "สุขภัณฑ์",
    "อุปกรณ์ไฟฟ้า",
    "วัสดุก่อสร้าง",
    "อื่นๆ",
  ];

  const prices = ["฿1~10", "฿10~20", "฿20~"];

  const brands = ["ท่อน้ำไทย", "SCG"];
  // -------------------------------------------------

  const [selectCategory, setSelectCategory] = useState("สินค้าทั้งหมด");
  const [selectPrice, setSelectPrice] = useState(
    prices.reduce((obj, price) => ({ ...obj, [price]: false }), {})
  );
  const [selectBrand, setSelectBrand] = useState(
    brands.reduce((obj, brand) => ({ ...obj, [brand]: false }), {})
  );
  const [searchTerm, setSearchTerm] = useState("");

  const handleSelectPrice = ({ target }) => {
    setSelectPrice((prev) => ({
      ...prev,
      [target.value]: !selectPrice[target.value],
    }));
  };
  const handleSelectBrand = ({ target }) => {
    setSelectBrand((prev) => ({
      ...prev,
      [target.value]: !selectBrand[target.value],
    }));
  };
  const handleSearch = ({ target }) => {
    setSearchTerm(target.value);
  };
  const clearSearch = () => {
    setSearchTerm("");
  };

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
  const renderCheckbox = (items, stateObj, handler) => {
    return items.map((item) => {
      return (
        <Checkbox
          key={item}
          value={item}
          onChange={handler}
          check={stateObj[item]}
        ></Checkbox>
      );
    });
  };
  const renderCategoryTag = () => {
    return (
      <Tag key={selectCategory} value={selectCategory} button={false}></Tag>
    );
  };
  const renderTags = (stateObj, handler) => {
    return Object.keys(stateObj).map((item) => {
      return (
        stateObj[item] && (
          <Tag key={item} value={item} button={true} onClick={handler}></Tag>
        )
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
          {renderCheckbox(prices, selectPrice, handleSelectPrice)}
        </div>
        <div className={styles.FilterBox}>
          <h2>แบรนด์</h2>
          {renderCheckbox(brands, selectBrand, handleSelectBrand)}
        </div>
      </div>

      <div className={styles.Content}>
        <div className={styles.Header}>
          <h1>สินค้าของเรา</h1>
          <Searchbar
            searchTerm={searchTerm}
            handleSearch={handleSearch}
            clearSearch={clearSearch}
            category={selectCategory}
          />
        </div>
        <div className={styles.Tags}>
          {renderCategoryTag()}
          {renderTags(selectPrice, handleSelectPrice)}
          {renderTags(selectBrand, handleSelectBrand)}
        </div>
        <div className={styles.Products}>
          <Product />
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
