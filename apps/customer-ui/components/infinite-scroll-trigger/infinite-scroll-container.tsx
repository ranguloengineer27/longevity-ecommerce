import { Box, Spinner, Text } from "@chakra-ui/react";
import React, { FC, JSX, useEffect } from "react";
import { useInView } from "react-intersection-observer";

type NextPageCheck = { hasNextPage: boolean; isFetchingNextPage: boolean };

export type InfiniteScrollTriggerProps = NextPageCheck & {
  fetchNextPage: () => void;
  children: JSX.Element;
};

const InfiniteScrollStatus: FC<NextPageCheck> = ({
  hasNextPage,
  isFetchingNextPage,
}) => {
  if (isFetchingNextPage) return <Spinner size="lg" />;
  if (hasNextPage) return <Text color="gray.500">Scroll to load more...</Text>;
  return <Text color="gray.400">No more products</Text>;
};

const InfiniteScrollContainer: FC<InfiniteScrollTriggerProps> = ({
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
  children,
}) => {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <>
      {children}
      <Box ref={ref} textAlign="center" mt={10}>
        <InfiniteScrollStatus
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      </Box>
    </>
  );
};

export default InfiniteScrollContainer;
