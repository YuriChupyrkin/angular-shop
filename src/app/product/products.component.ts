import {
  Component,
  OnInit,
  AfterViewInit,
  Output,
  EventEmitter,
  ViewChildren,
  ElementRef,
  QueryList,
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
  @ViewChildren('productsItems') productsItems: QueryList<ElementRef> =
    new QueryList<ElementRef>();
  productPromise: Promise<Array<Product>>;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productPromise = this.productsService.loadProduct();
  }

  ngAfterViewInit() {
    this.productsItems.forEach((item: any) => {
      console.log(`item view inited. price: ${item.itemPrice}`);
    });
  }

  onBuy(product: Product): void {
    this.buyItem.emit(product);
  }
}
