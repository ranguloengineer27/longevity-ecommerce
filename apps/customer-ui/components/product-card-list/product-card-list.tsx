import { Product } from "@/api/product/product-types";
import React from "react";
import { FC } from "react";
import ProductsCard from "../product-card/product-card";
import { SimpleGrid } from "@chakra-ui/react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getProducts } from "@/api/product/product-queries";

const ProductCardList: FC = () => {
  const { data } = useSuspenseQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={6}>
      {data?.map((product) => (
        <ProductsCard key={product.id} {...product} />
      ))}
    </SimpleGrid>
  );
};

export default ProductCardList;
