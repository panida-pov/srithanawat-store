export const helper = {
  filterByCategory(products, categoryStr) {
    if (categoryStr === "สินค้าทั้งหมด") return products;
    return products.filter((product) => product.category === categoryStr);
  },

  isBetween(numStr, minStr, maxStr) {
    const num = parseInt(numStr);
    if (isNaN(num)) return false;

    const min = isNaN(parseInt(minStr)) ? 0 : parseInt(minStr);
    const max = isNaN(parseInt(maxStr)) ? Infinity : parseInt(maxStr);

    return num >= min && num <= max;
  },

  filterByPrice(products, pricesObj) {
    const ranges = Object.keys(pricesObj)
      .filter((range) => pricesObj[range])
      ?.map((range) => range.replace(/[฿\s]+/g, "").split(/[~-]/));
    if (!ranges.length) return products;

    return products.filter((product) =>
      ranges.some((range) => this.isBetween(product.price, range[0], range[1]))
    );
  },

  filterByBrand(products, brandsObj) {
    const brands = Object.keys(brandsObj).filter((brand) => brandsObj[brand]);
    if (!brands.length) return products;
    return products.filter((product) => brands.includes(product.brand));
  },

  filterBySearch(products, searchStr) {
    if (!searchStr) return products;
    const search = searchStr.toLowerCase();
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(search) ||
        product.brand.toLowerCase().includes(search) ||
        product.details.toLowerCase().includes(search)
    );
  },

  filterAll({ products, category, prices, brands, search }) {
    const filteredCategory = this.filterByCategory(products, category);
    const filteredPrice = this.filterByPrice(filteredCategory, prices);
    const filteredBrand = this.filterByBrand(filteredPrice, brands);
    const filteredAll = this.filterBySearch(filteredBrand, search);

    return filteredAll;
  },
};
