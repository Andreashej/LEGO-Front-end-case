import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from './product-service.service';
import { Observable } from 'rxjs';
import { Product } from './models/product';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'LegoCase';

  constructor(private productService: ProductServiceService, private shoppingListService: ShoppingListService) { }

  products$: Observable<Product[]>;
  shoppinglist: Product[];

  ngOnInit() {
    this.products$ = this.productService.getProducts();
    this.shoppinglist = this.shoppingListService.getShoppingList();
  }
}
