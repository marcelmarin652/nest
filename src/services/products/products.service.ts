import { Injectable } from '@nestjs/common';

import { Product } from '../../entities/product.entity';

@Injectable()
export class ProductsService {
  private counterId = 1;

  private products: Product[] = [
    {
      id: 1,
      name: 'Product One',
      description: 'This is product one',
      price: 1000,
      stock: 100,
      image: '',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((item) => item.id === id);
  }

  create(payload: any) {
    const newProduct = {
      id: this.products.length + 1,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: any) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((item) => item.id === id);
      // aqui estamos haciendo un merge de los objetos para que no se pierdan los datos que no se estan enviando en el payload y solo se actualicen los que si se estan enviando en el payload
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index];
    }
    return null;
  }
}
