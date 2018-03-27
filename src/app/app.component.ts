import { Component, Inject, OnInit, Optional } from '@angular/core';

import Product from './common/product.model';
import { CartService } from './cart/cart.service';
import { ConstantsService } from './core/constants.service';
import { GeneratorService } from './core/generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private userToken: string;

  constructor(
    private cartService: CartService,
    @Optional() @Inject(ConstantsService) private constants: any,
    @Optional() @Inject(GeneratorService) private generator: any,
  ) {
  }

  ngOnInit(): void {
    this.userToken = this.generator || 'default_user_token';
    this.constants = this.constants || { App: 'default_app', Ver: '0.0.0.1'};

    console.log(`${this.constants.App} (${this.constants.Ver}) has inited...`);
    console.log(`User token: ${this.userToken}`);
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
