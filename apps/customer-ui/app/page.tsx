"use client";

import React from "react";
import ProductsPage from "@/product/components/product-list-container/product-list-container";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@api/client/queryClient";

export default function Home(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductsPage />
    </QueryClientProvider>
  );
}
