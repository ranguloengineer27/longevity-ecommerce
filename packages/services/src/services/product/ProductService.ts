import { Product } from './types';

export class ProductService {
  private products: Product[] = [
    {
      id: '1',
      name: 'Longevity Supplement Premium',
      description: 'Advanced longevity supplement with proven ingredients',
      price: 89.99,
      category: 'supplements',
      inStock: true,
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-01-15')
    },
    {
      id: '2',
      name: 'Anti-Aging Cream',
      description: 'Premium anti-aging cream with retinol and peptides',
      price: 149.99,
      category: 'skincare',
      inStock: true,
      createdAt: new Date('2024-01-20'),
      updatedAt: new Date('2024-01-20')
    },
    {
      id: '3',
      name: 'Longevity Testing Kit',
      description: 'Comprehensive testing kit for longevity biomarkers',
      price: 299.99,
      category: 'testing',
      inStock: false,
      createdAt: new Date('2024-02-01'),
      updatedAt: new Date('2024-02-01')
    }
  ];

  async getAllProducts(): Promise<Product[]> {
    return Promise.resolve([...this.products]);
  }

  async getProductById(id: string): Promise<Product | null> {
    const product = this.products.find(p => p.id === id);
    return Promise.resolve(product || null);
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    const filteredProducts = this.products.filter(p => 
      p.category.toLowerCase() === category.toLowerCase()
    );
    return Promise.resolve(filteredProducts);
  }

  async createProduct(productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product> {
    const newProduct: Product = {
      ...productData,
      id: (this.products.length + 1).toString(),
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    this.products.push(newProduct);
    return Promise.resolve(newProduct);
  }

  async updateProduct(id: string, updates: Partial<Omit<Product, 'id' | 'createdAt'>>): Promise<Product | null> {
    const productIndex = this.products.findIndex(p => p.id === id);
    
    if (productIndex === -1) {
      return Promise.resolve(null);
    }

    this.products[productIndex] = {
      ...this.products[productIndex],
      ...updates,
      updatedAt: new Date()
    };

    return Promise.resolve(this.products[productIndex]);
  }

  async deleteProduct(id: string): Promise<boolean> {
    const productIndex = this.products.findIndex(p => p.id === id);
    
    if (productIndex === -1) {
      return Promise.resolve(false);
    }

    this.products.splice(productIndex, 1);
    return Promise.resolve(true);
  }

  async searchProducts(query: string): Promise<Product[]> {
    const searchTerm = query.toLowerCase();
    const filteredProducts = this.products.filter(p => 
      p.name.toLowerCase().includes(searchTerm) ||
      p.description.toLowerCase().includes(searchTerm) ||
      p.category.toLowerCase().includes(searchTerm)
    );
    return Promise.resolve(filteredProducts);
  }
}
