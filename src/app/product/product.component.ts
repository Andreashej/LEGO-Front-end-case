import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  @Input() product;

  @Output() atc = new EventEmitter();

  inCart: boolean;

  constructor(private shoppinglist: ShoppingListService) { }

  ngOnInit() {
    this.inCart = this.shoppinglist.isInCart(this.product);
  }

  addToCart() {
    this.atc.emit(this.product.SKU);
  }

}
