import styles from "./ProductsPage.module.css";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useEffect, useState, useRef } from "react";
import Tag from "../../components/Tag/Tag";
import Checkbox from "../../components/Checkbox/Checkbox";
import Searchbar from "../../components/Searchbar/Searchbar";
import ProductList from "../../components/ProductList/ProductList";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { data } from "../../data/data";
import { helper } from "../../utils/helper";

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

  // select and render product category
  const [selectCategory, setSelectCategory] = useState("สินค้าทั้งหมด");
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
  const renderCategoryTag = () => {
    return (
      <Tag key={selectCategory} value={selectCategory} button={false}></Tag>
    );
  };

  // select product price range
  const [selectPrice, setSelectPrice] = useState(
    prices.reduce((obj, price) => ({ ...obj, [price]: false }), {})
  );
  const handleSelectPrice = ({ target }) => {
    setSelectPrice((prev) => ({
      ...prev,
      [target.value]: !selectPrice[target.value],
    }));
  };

  // select product brand
  const [selectBrand, setSelectBrand] = useState(
    brands.reduce((obj, brand) => ({ ...obj, [brand]: false }), {})
  );
  const handleSelectBrand = ({ target }) => {
    setSelectBrand((prev) => ({
      ...prev,
      [target.value]: !selectBrand[target.value],
    }));
  };

  // render checkbox for selecting price range and brand
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

  // render tags for selected price range and brand
  const renderTags = (stateObj, handler) => {
    return Object.keys(stateObj).map((item) => {
      return (
        stateObj[item] && (
          <Tag key={item} value={item} button={true} onClick={handler}></Tag>
        )
      );
    });
  };

  // search for product
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = ({ target }) => {
    setSearchTerm(target.value);
  };
  const clearSearch = () => {
    setSearchTerm("");
  };

  // filter products using helper function
  const filteredProducts = helper.filterAll({
    products: data.products,
    category: selectCategory,
    prices: selectPrice,
    brands: selectBrand,
    search: searchTerm,
  });

  // close filter menu
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const checkClickedOutside = (e) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", checkClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkClickedOutside);
    };
  }, [open]);

  return (
    <div className={open ? styles.overlay : styles.ProductPage}>
      <div
        ref={ref}
        className={open ? styles.FilterContainer : styles.inactive}
      >
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
          <button
            type="button"
            className={styles.Button}
            onClick={() => setOpen(true)}
          >
            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </button>
          <h1>สินค้าของเรา</h1>
          <div className={styles.Searchbar}>
            <Searchbar
              searchTerm={searchTerm}
              handleSearch={handleSearch}
              clearSearch={clearSearch}
              category={selectCategory}
            />
          </div>
        </div>
        <div className={styles.Tags}>
          {renderCategoryTag()}
          {renderTags(selectPrice, handleSelectPrice)}
          {renderTags(selectBrand, handleSelectBrand)}
        </div>
        <div className={styles.ProductList}>
          {filteredProducts.length ? (
            <ProductList products={filteredProducts} />
          ) : (
            <h3 className={styles.NotFound}>ไม่พบสินค้าที่ท่านกำลังค้นหา</h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
