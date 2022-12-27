export class CreateProductDto{
  // readonly es que no quiero que se manipule solo que sea de tipo lectura, es decir el atributo no puede ser modificado
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly stock: number;
  readonly image: string;
}

export class UpdateProductDto{
  // readonly es que no quiero que se manipule solo que sea de tipo lectura, es decir el atributo no puede ser modificado
  readonly name?: string;
  readonly description?: string;
  readonly price?: number;
  readonly stock?: number;
  readonly image?: string;
}
