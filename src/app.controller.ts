import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hola Mundo';
  }

  @Get('nuevo')
  newEndPoint(){
    return'Yo soy nuevo';
  }

  @Get('/ruta/')
  hello(){
    return'Yo soy  con /sas/';
  }

  //:id es un parametro
  @Get('/product/:productId')
  getProduct(@Param() params:any){
    // tiene que ser params.id porque tiene que ser el mismo nombre que el parametro como lo pongamos
    return`Product ${params.productId}`;
  }

  @Get('/products/:productId')
  getProducts(@Param('productId') productId:string){
    // tiene que ser params.id porque tiene que ser el mismo nombre que el parametro como lo pongamos
    return`Product ${productId}`;
  }

  @Get('/categories/:id/products/:productId')
  getCategory(@Param('productId') productId:string, @Param('id') id:string){
    // tiene que ser params.id porque tiene que ser el mismo nombre que el parametro como lo pongamos
    return`Product ${productId} and ${id}`;
  }
}
