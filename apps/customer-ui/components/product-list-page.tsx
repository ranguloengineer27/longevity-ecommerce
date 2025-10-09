// @apis
import { getProducts } from "@/api/product/product-queries";
import { Product } from "@/api/product/product-types";

// @components
import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import InfiniteScrollContainer from "@ui/components/infinite-scroll-container";
import ProductsCard from "@ui/components/product-card";

// @vendors
import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";

const ProductsPage = () => {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ pageParam = 1 }) => getProducts(pageParam),
    getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,
    initialPageParam: 1,
  });

  const products = data?.pages.flatMap((page) => page.data) ?? [];

  if (isLoading) {
    return (
      <Box textAlign="center" p={10}>
        <Spinner size="xl" />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box textAlign="center" p={10}>
        <Text color="red.500">Error loading products.</Text>
      </Box>
    );
  }

  return (
    <Box p={8}>
      <Heading mb={6} textAlign="center">
        Products
      </Heading>

      <InfiniteScrollContainer
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
        isFetchingNextPage={isFetchingNextPage}
      >
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={6}>
          {products.map((product: Product) => (
            <ProductsCard key={product.id} {...product} />
          ))}
        </SimpleGrid>
      </InfiniteScrollContainer>
    </Box>
  );
};

export default ProductsPage;
