import { Component, OnInit, Input } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.sass']
})
export class CartItemComponent implements OnInit {

  @Input() product;

  constructor(private shoppinglist: ShoppingListService) { }


  ngOnInit() {
  }

}
