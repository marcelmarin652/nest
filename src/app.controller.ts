import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hola Mundo';
  }

  @Get('nuevo')
  newEndPoint() {
    return 'Yo soy nuevo';
  }

  @Get('/ruta/')
  hello() {
    return 'Yo soy  con /sas/';
  }

  @Get('/products/')
  getProduct(
    @Query('limit') limit: number = 100,
    @Query('offset') offset: number = 0,
    @Query('brand') brand: string,
  ) {
    // puedo enviar algo asi http://localhost:3000/products?limit=100&offset=50
    return `Product: limit=>${limit} offset=> ${offset} brand=> ${brand}`;
  }

  // aqui colocamos filter arriba para que no se confunda con el de abajo ya que puede pensar que "filter" es un id
  @Get('/products/filter')
  getProductFilter(){
   // tiene que ser params.id porque tiene que ser el mismo nombre que el parametro como lo pongamos
  return`Soy un filtro`;
  }

  @Get('/products/:productId')
  getProducts(@Param('productId') productId:string){
   // tiene que ser params.id porque tiene que ser el mismo nombre que el parametro como lo pongamos
  return`Product ${productId}`;
  }

  @Get('/categories/:id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    // tiene que ser params.id porque tiene que ser el mismo nombre que el parametro como lo pongamos
    return `Product ${productId} and ${id}`;
  }
}
