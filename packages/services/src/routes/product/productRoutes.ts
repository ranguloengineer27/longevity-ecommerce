import { Router, Request, Response } from 'express';
import { ProductService } from '../../services/product/ProductService';
import { CreateProductRequest, UpdateProductRequest } from '../../services/product/types';

const router: Router = Router();
const productService = new ProductService();

// GET /products - Get all products with optional filtering
router.get('/', async (req: Request, res: Response) => {
  try {
    const { category, search } = req.query;
    
    let products;
    
    if (search && typeof search === 'string') {
      products = await productService.searchProducts(search);
    } else if (category && typeof category === 'string') {
      products = await productService.getProductsByCategory(category);
    } else {
      products = await productService.getAllProducts();
    }
    
    res.json({
      success: true,
      data: products,
      count: products.length
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch products'
    });
  }
});

// GET /products/:id - Get product by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await productService.getProductById(id);
    
    if (!product) {
      return res.status(404).json({
        success: false,
        error: 'Product not found'
      });
    }
    
    res.json({
      success: true,
      data: product
    });
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch product'
    });
  }
});

// POST /products - Create new product
router.post('/', async (req: Request, res: Response) => {
  try {
    const productData: CreateProductRequest = req.body;
    
    // Basic validation
    if (!productData.name || !productData.description || productData.price === undefined) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: name, description, price'
      });
    }
    
    if (productData.price < 0) {
      return res.status(400).json({
        success: false,
        error: 'Price must be a positive number'
      });
    }
    
    const newProduct = await productService.createProduct(productData);
    
    res.status(201).json({
      success: true,
      data: newProduct,
      message: 'Product created successfully'
    });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to create product'
    });
  }
});

// PUT /products/:id - Update product
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updates: UpdateProductRequest = req.body;
    
    if (updates.price !== undefined && updates.price < 0) {
      return res.status(400).json({
        success: false,
        error: 'Price must be a positive number'
      });
    }
    
    const updatedProduct = await productService.updateProduct(id, updates);
    
    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        error: 'Product not found'
      });
    }
    
    res.json({
      success: true,
      data: updatedProduct,
      message: 'Product updated successfully'
    });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to update product'
    });
  }
});

// DELETE /products/:id - Delete product
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await productService.deleteProduct(id);
    
    if (!deleted) {
      return res.status(404).json({
        success: false,
        error: 'Product not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Product deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to delete product'
    });
  }
});

export default router;
