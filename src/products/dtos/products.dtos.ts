import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsUrl,
  IsPositive,
} from 'class-validator';

import { PartialType } from '@nestjs/mapped-types'

export class CreateProductDto {
  // readonly es que no quiero que se manipule solo que sea de tipo lectura, es decir el atributo no puede ser modificado
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly price: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly stock: number;

  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}

// aqui hace las mismas validaciones del padre pero cada una de ellas va a ser opcional
export class UpdateProductDto extends PartialType(CreateProductDto) {

}
