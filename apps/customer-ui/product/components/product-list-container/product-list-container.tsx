// @apis
import { getProducts } from "@api/services/products";

// @components
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import ProductList from "../product-list";

// @vendors
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import React from "react";

const ProductListContainer = () => {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useSuspenseInfiniteQuery({
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

      {/* <Suspense fallback={<Spinner size="xl" />}>
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
      </Suspense> */}
      <ProductList
        products={products}
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
      />
    </Box>
  );
};

export default ProductListContainer;
