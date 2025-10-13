import React from "react";
import { Box, Button, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Product } from "@longevity/api";

const ProductCard: FC<Product> = ({ id, image_url, name, description, price }) => {
  return (
    <Box
      key={id}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      _hover={{ boxShadow: "lg" }}
      transition="0.2s"
    >
      <Image src={image_url} alt={name} objectFit="cover" w="100%" h="200px" />
      <Box p={4}>
        <Stack gap={2}>
          <Heading fontSize="lg">{name}</Heading>
          <Text fontSize="sm" color="gray.600">
            {description}
          </Text>
          <Text fontWeight="bold">${price}</Text>
          <Button colorScheme="purple" size="sm">
            Add to Cart
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductCard;
