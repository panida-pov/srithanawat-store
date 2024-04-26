import styles from "./Tag.module.css";
function Tag(props) {
  return (
    <>
      <div>
        {props.selectBrand?.map((brand) => {
          return <li key={brand}>{brand}</li>;
        })}
      </div>
      <div>
        {props.selectPrice?.map((price, index) => {
          return <li key={index}>{`${price.min} - ${price.max}`}</li>;
        })}
      </div>
    </>
  );
}

export default Tag;
