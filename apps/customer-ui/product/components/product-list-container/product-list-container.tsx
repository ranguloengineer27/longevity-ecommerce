// @vendors
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Box, Heading, Spinner } from "@chakra-ui/react";

// @apis
import { getProducts } from "@api/services/products";

// @components
import ProductList from "../product-list";
import ProductErrorAlert from "../product-error-alert/product-error-alert";

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
    return <ProductErrorAlert />;
  }

  return (
    <Box p={8}>
      <Heading mb={6} textAlign="center">
        Products
      </Heading>

      <ErrorBoundary fallback={<ProductErrorAlert />}>
        <Suspense fallback={<Spinner size="xl" />}>
          <ProductList
            products={products}
            isFetchingNextPage={isFetchingNextPage}
            hasNextPage={hasNextPage}
            fetchNextPage={fetchNextPage}
          />
        </Suspense>
      </ErrorBoundary>
    </Box>
  );
};

export default ProductListContainer;
