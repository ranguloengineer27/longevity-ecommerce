// @apis
import { getProducts } from "@/api/ProductQueries";
import { Product } from "@/api/ProductTypes";

// @components
import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

// @vendors
import { useQuery } from "@tanstack/react-query";
import React from "react";

const ProductsPage = () => {
  const { data, isPending, error } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  console.log("DATA:", data);

  return (
    <Box p={8}>
      <Heading mb={6} textAlign="center">
        Products
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
        {data?.map((product: any) => (
          <Box
            key={product.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            _hover={{ boxShadow: "lg" }}
            transition="0.2s"
          >
            <Image
              src={product.image}
              alt={product.name}
              objectFit="cover"
              w="100%"
              h="200px"
            />
            <Box p={4}>
              <Stack spacing={2}>
                <Heading fontSize="lg">{product.name}</Heading>
                <Text fontSize="sm" color="gray.600">
                  {product.description}
                </Text>
                <Text fontWeight="bold">${product.price.toFixed(2)}</Text>
                <Button colorScheme="purple" size="sm">
                  Add to Cart
                </Button>
              </Stack>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProductsPage;
