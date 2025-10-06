"use client";

import React from "react";
import ProductsPage from "@/components/ProductsPage";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/api/apiClient";

export default function Home(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductsPage />
    </QueryClientProvider>
  );
}
