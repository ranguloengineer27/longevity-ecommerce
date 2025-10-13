// @vendors
import { SimpleGrid } from "@chakra-ui/react/simple-grid";
import InfiniteScrollContainer from "@ui/components/infinite-scroll-container";
import React, { FC } from "react";

import { Product } from "@api/types/product";
import ProductsCard from "@ui/components/product-card";
import { MIN_PRODUCTS_SROLL } from "./product-list.constants";

type ProductListProps = {
  products: Product[];
  hasNextPage: boolean;
  fetchNextPage: () => void;
  isFetchingNextPage: boolean;
};

const ProductList: FC<ProductListProps> = ({
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
  products,
}) => {
  /*
  TODO: Implement list virtualization accordingly
  
  const parentRef = useRef<HTMLElement>(null);
  const rowVirtualizer = useVirtualizer({
    count: products.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => CARD_SIZE,
    overscan: OVERSCAN,
  });
  const virtualizedList = rowVirtualizer.getVirtualItems(); */
  const showScrollStatus = products.length >= MIN_PRODUCTS_SROLL;

  return (
    <InfiniteScrollContainer
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
      isFetchingNextPage={isFetchingNextPage}
      showScrollStatus={showScrollStatus}
    >
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={6}>
        {products.map((product) => {
          return <ProductsCard
            key={product.id}
            image_url={`${product.image_url}?w=fm=jpg&q=60&w=600`}
            category_id={product.category_id}
            name={product.name}
            price={product.price}
            description={product.description}
            id={product.id} />;
        })}
      </SimpleGrid>
    </InfiniteScrollContainer>
  );
};

export default ProductList;
