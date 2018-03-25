import Product from '../common/product.model';

export default class CartItem {
  item: Product;
  count: number;
  name: string;
  price: number;

  constructor(item: Product) {
    this.item = item;
    this.name = item.name;
    this.price = item.price;
    this.count = 1;
  }
}
