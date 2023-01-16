import { registerAs } from '@nestjs/config';

// todo esto se hace para poder tener un archivo de configuracion el cual no haga un formating de las variables de entorno y no tener errores de tipo
export default registerAs('config', () => {
  return {
    database: {
      name: process.env.DATABASE_NAME,
      port: process.env.DATABASE_PORT,
    },
    apiKey: process.env.API_KEY,
  };
});
