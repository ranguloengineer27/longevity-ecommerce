export const getProducts = async (page = 1, limit = 8) => {
  const res = await fetch("https://fakestoreapi.com/products");
  const allProducts = await res.json();

  const start = (page - 1) * limit;
  const end = start + limit;
  const pageData = allProducts.slice(start, end);

  return {
    data: pageData,
    nextPage: end < allProducts.length ? page + 1 : null,
  };
};
