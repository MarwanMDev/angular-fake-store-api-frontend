import { Component, Input, OnInit } from '@angular/core';
import { any } from 'cypress/types/bluebird';
import { Product } from 'typings';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  discountedPrice: number | undefined;

  @Input('product')
  product: Product = {
    name: '',
    description: '',
    category: undefined,
    price: '',
    availableSize: '',
    availableColors: '',
    size: '',
    color: '',
    discount: 0,
    unitWeight: 0,
    productAvailability: false,
    discountAvailable: false,
    rating: 0,
    images: [],
  };

  constructor() {}

  ngOnInit(): void {
    if (this.product.discountAvailable) {
      this.discountedPrice =
        parseInt(this.product.price) - this.product.discount;
    }
  }
}
