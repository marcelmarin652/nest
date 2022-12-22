import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    // tiene que ser params.id porque tiene que ser el mismo nombre que el parametro como lo pongamos
    return `Product ${productId} and ${id}`;
  }
}
