// @vendors
import { getProducts } from "@/api/queries";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const ProductsPage = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <div>
      <h1>ProductsPage</h1>
    </div>
  );
};

export default ProductsPage;
