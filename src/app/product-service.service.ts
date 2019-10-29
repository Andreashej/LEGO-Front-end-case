import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  jsonProducts = '../assets/products.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.jsonProducts).pipe(
      map(res => {
        return res.map(prod => new Product().deserialize(prod));
      })
    )
  }

  getProduct(sku): Observable<Product> {
    return this.http.get<Product[]>(this.jsonProducts).pipe(
      map (res => {
        res = res.filter(prod => { return prod['SKU'] == sku });

        return new Product().deserialize(res[0]);
      })
    );
  }

}
