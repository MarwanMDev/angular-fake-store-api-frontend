import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: any;
  categories: any;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.productService.getProducs().subscribe((response: any) => {
      this.products = response.data;
    });
    this.categoryService.getCategories().subscribe((response: any) => {
      this.categories = response.data;
    });
  }

  ngDoCheck() {
    console.log(this.categories);
  }
}
