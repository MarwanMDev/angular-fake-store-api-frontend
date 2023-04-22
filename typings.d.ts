// Product Response
export interface ProductResponse {
  error: boolean;
  total: number;
  page: number;
  limit: number;
  products: Product[];
}

// Product
export interface Product {
  sku?: string;
  idsku?: string;
  name: string;
  description: string;
  category: Category;
  price: string;
  availableSize: string;
  availableColors: string;
  size: string;
  color: string;
  discount: number;
  unitWeight: number;
  productAvailability: boolean;
  discountAvailable: boolean;
  rating: number;
  images: [];
}

// Category
export interface Category {
  name: string;
}
