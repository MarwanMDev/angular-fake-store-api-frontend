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
  title: string;
  price: string;
  description: string;
  category: Category;
  images: [];
}

// Category
export interface Category {
  name: string;
}
