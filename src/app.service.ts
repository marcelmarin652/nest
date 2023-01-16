import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
// no se usa corchetes porque tiene un export default
import config from './config';

@Injectable()
export class AppService {
  constructor(
    //@Inject('API_KEY') private apiKey: string,
    //@Inject('TASKS') private tasks: any[], // 👈 inject TASKS
    @Inject(config.KEY) private configService: ConfigType<typeof config>, // 👈 inject configService
  ) {}

  getHello(): string {
    // console.log(this.tasks); // 👈 print TASKS
    const apiKey = this.configService.apiKey;
    const name = this.configService.database.name;
    return `Hello Wrorld!23 gsr ${apiKey} and ${name}`;
  }
}
