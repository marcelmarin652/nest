import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {

  constructor(
    //@Inject('API_KEY') private apiKey: string,
    //@Inject('TASKS') private tasks: any[], // 👈 inject TASKS
    private configService: ConfigService,
  ) {}

  getHello(): string {
   // console.log(this.tasks); // 👈 print TASKS
    return `Hello Wrorld!23 gsr ${this.configService.get('API_KEY')} db ${this.configService.get('DATABASE_NAME')}`;
  }
}
