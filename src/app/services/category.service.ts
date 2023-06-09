import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private url = 'http://localhost:8081/api/categories';

  constructor(private httpClient: HttpClient) {}

  getCategories() {
    return this.httpClient.get(this.url);
  }
}
