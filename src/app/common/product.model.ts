export enum Category {
  racing = 'racing',
  fps = 'FPS',
  strategy = 'strategy',
  moba = 'moba',
  action = 'action',
}

export default class Product {
  name: string;
  description: string;
  price: number;
  isAvailible: boolean;
  category: Category;

  constructor(
    name,
    description = '',
    price = 1,
    availible = false,
    category = Category.action
  ) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.isAvailible = availible;
    this.category = category;
  }
}
