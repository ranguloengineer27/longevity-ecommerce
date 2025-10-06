"use client";

// @apis
import { getProducts } from "@/api/ProductQueries";
import { Product } from "@/api/ProductTypes";

// @components
import { Box, Heading, Spinner } from "@chakra-ui/react";

// @vendors
import { useSuspenseQuery } from "@tanstack/react-query";
import React from "react";
import { Suspense } from "react";
import ProductsCardList from "./ProductsCardList/ProductsCardList";

const ProductsPage = () => {
  const { data } = useSuspenseQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  console.log("data", data);

  return (
    <Box p={8}>
      <Heading mb={6} textAlign="center">
        Products
      </Heading>
      <Suspense fallback={<Spinner size="xl" />}>
        <ProductsCardList />
      </Suspense>
    </Box>
  );
};

export default ProductsPage;
