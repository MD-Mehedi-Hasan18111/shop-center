export const getProductById = (products, productId) => {
  return products?.find((prod) => prod?.id === Number(productId));
};

export const getProductsByCategory = (products, categoryName) => {
  if (categoryName === "all") {
    return products;
  } else {
    return products?.filter((prod) => prod?.category === categoryName);
  }
};
