import { Module } from '@nestjs/common';
import { UsersService } from './services/users/users.service';
import { CustomersService } from './services/customers/customers.service';

import { ProductsModule } from '../products/products.module';
import { UsersController } from './controllers/users.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService, CustomersService],
  imports: [ProductsModule],
})
export class UsersModule {}
