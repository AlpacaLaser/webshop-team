import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Product {
  id?: string;
  name?: string;
  nane?: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  imageUrl: string;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiUrl = '/api/product';

  constructor(private http: HttpClient) {}

  normalize(product: Product): Product {
    return {
      ...product,
      name: product.name || product.nane || ''
    };
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      map((products) => products.map((product) => this.normalize(product)))
    );
  }

  getById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`).pipe(
      map((product) => this.normalize(product))
    );
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, {
      ...product,
      nane: product.name
    }).pipe(
      map((createdProduct) => this.normalize(createdProduct))
    );
  }

  update(id: string, product: Product): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, {
      ...product,
      nane: product.name
    });
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
