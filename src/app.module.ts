import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CostumersController } from './controllers/costumers.controller';
import { OrdersController } from './controllers/orders.controller';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

import { HttpModule, HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

const API_KEY2 = '123456';
const API_KEY = 'prod123142124';

@Module({
  imports: [
    UsersModule,
    ProductsModule,
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [AppController, CostumersController, OrdersController],
  providers: [
    AppService,
    {
      //PROVIDE SERIA COMO EL NOMBRE DE LA VARIABLE
      provide: 'API_KEY2',
      // el usevalue seria el valor que le doy a la variable, la cual esta declarada arriba
      useValue: API_KEY,
    },
    {
      //Aqui estamos haciedno que el valor de la variable sea dinamico segun en el modo en que se este ejecutando la app (dev o prod)
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY : API_KEY2,
    },
    {
      provide: 'TASKS',
      inject: [HttpService],
      useFactory: async (http: HttpService) => {
        const tasks = await http.get(
          'https://jsonplaceholder.typicode.com/todos',{
            headers: { "Accept-Encoding": "gzip,deflate,compress" } 
          }
        );
        const value = Promise.resolve(firstValueFrom(tasks));
        return value;
      },
    },
  ],
})
export class AppModule {}
