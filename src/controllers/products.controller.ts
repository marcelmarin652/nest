import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProduct(
    @Query('limit') limit: number = 100,
    @Query('offset') offset: number = 0,
    @Query('brand') brand: string,
  ) {
    // puedo enviar algo asi http://localhost:3000/products?limit=100&offset=50
    return `Product: limit=>${limit} offset=> ${offset} brand=> ${brand}`;
  }

  // aqui colocamos filter arriba para que no se confunda con el de abajo ya que puede pensar que "filter" es un id
  @Get('filter')
  getProductFilter() {
    // tiene que ser params.id porque tiene que ser el mismo nombre que el parametro como lo pongamos
    return `Soy un filtro`;
  }

  @Get(':productId')
  getProducts(@Param('productId') productId: string) {
    // tiene que ser params.id porque tiene que ser el mismo nombre que el parametro como lo pongamos
    return `Product ${productId}`;
  }
}
