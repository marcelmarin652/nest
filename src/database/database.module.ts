import { Module, Global } from '@nestjs/common';

const API_KEY = '12345634';
const API_KEY_PROD = 'PROD1212121SA';

// Es un decorador que se usa para indicar que el modulo es global, y va a permitir que cualquier modulo pueda usarlo
@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
  ],
  // aqio ;e decops que apiKey pueda ser usado desde cualquier modulo sin necesidad de importarlo en el modulo que quiera usarlo sencillamente inyectarlo
  exports: ['API_KEY'],
})
export class DatabaseModule {}
