import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';
import { Product, ProductResponse } from 'typings';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  productResponse: ProductResponse = {
    error: false,
    total: 0,
    limit: 0,
    page: 1,
    products: [],
  };
  products: Product[] = this.productResponse.products;
  categories: any;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.productService.getProducs().subscribe((response: any) => {
      this.products = response.data.products;
    });
    this.categoryService.getCategories().subscribe((response: any) => {
      this.categories = response.data;
    });
  }

  ngDoCheck() {
    console.log(this.products);
  }
}
