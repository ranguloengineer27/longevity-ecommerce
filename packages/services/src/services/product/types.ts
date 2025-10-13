export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  inStock: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateProductRequest {
  name: string;
  description: string;
  price: number;
  category: string;
  inStock: boolean;
}

export interface UpdateProductRequest {
  name?: string;
  description?: string;
  price?: number;
  category?: string;
  inStock?: boolean;
}

export interface ProductFilters {
  category?: string;
  inStock?: boolean;
  minPrice?: number;
  maxPrice?: number;
}
