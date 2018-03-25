import {
  Component,
  OnInit,
  AfterViewInit,
  Output,
  EventEmitter,
  ViewChildren,
  ElementRef,
} from '@angular/core';

import Product from '../common/product.model';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, AfterViewInit {
  @Output() buyItem: EventEmitter<Product> =
    new EventEmitter<Product>();
  @ViewChildren('productsItems') productsItems: Array<ElementRef> =
    new Array<ElementRef>();
  products: Array<Product>;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.loadProduct();
  }

  ngAfterViewInit() {
    this.productsItems.forEach((item: any) => {
      console.log(`item view inited. price: ${item.itemPrice}`);
    });
  }

  onBuy(product: Product): void {
    console.log(`product list: onBuy: ${product.name}`);
    this.buyItem.emit(product);
  }
}
