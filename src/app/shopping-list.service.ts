import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { ProductServiceService } from './product-service.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  shoppingList: Product[] = [];

  constructor(private productService: ProductServiceService) { }

  getShoppingList() {
    return this.shoppingList;
  }

  addProduct(sku) {
    this.productService.getProduct(sku).subscribe(res => {
      this.shoppingList.push(res);
    });
  }

  removeProduct(product) {
    this.shoppingList.splice(this.shoppingList.indexOf(product),1);
  }
  
  isInCart(product) {
    return this.shoppingList.filter(prod => { return prod.SKU === product.SKU }).length > 0;
  }

  getTotal() {
    let total = 0;
    for (let product of this.shoppingList) {
      total += product.price * product.qty
    }
    return total;
  }

  getCurrency() {
    return this.shoppingList[0].currency;
  }

  hasItems(): boolean {
    return this.shoppingList.length > 0
  } 
}
