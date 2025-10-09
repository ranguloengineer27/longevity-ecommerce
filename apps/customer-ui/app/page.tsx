"use client";

import React from "react";
import ProductsPage from "@/components/product-list-page";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/api/api-client";

export default function Home(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductsPage />
    </QueryClientProvider>
  );
}
