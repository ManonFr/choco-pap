/**
 * Filters products based on selected filters
 * @param {Array} products - List of all products
 * @param {Object} filters - Filters from state
 * @returns {Array} - Filtered products
 */

export default function filterProducts(products = [], filters = {}) {
  return products.filter((product) => {
    const { price, note, category } = product;

    const inPriceRange = price >= filters.minPrice && price <= filters.maxPrice;

    const hasMinNote = note >= filters.minNote;

    const matchesCategory =
      filters.categories?.length === 0 ||
      filters.categories?.some((cat) => category[cat]);

    return inPriceRange && hasMinNote && matchesCategory;
  });
}
