import { Component, Inject, OnInit } from '@angular/core';

import Product from './common/product.model';
import { CartService } from './cart/cart.service';
import { ConstantsService } from './core/constants.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private cartService: CartService,
    @Inject(ConstantsService) private constants: any
  ) {}

  ngOnInit(): void {
    console.log(`${this.constants.App} (${this.constants.Ver}) has inited...`);
  }

  onAddToCart(product: Product): void {
    console.log(`onAddToCart: ${product.name}`);
    this.cartService.addToCart(product);
  }
}
