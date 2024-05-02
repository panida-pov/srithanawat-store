import Product from "../Product/Product";
function ProductList({ products }) {
  return (
    <>
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </>
  );
}

export default ProductList;
