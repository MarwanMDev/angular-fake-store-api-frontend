import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = 'http://localhost:8081/api/products';

  constructor(private httpClient: HttpClient) {}

  getProducs() {
    return this.httpClient.get(this.url);
  }
}
