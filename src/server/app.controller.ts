import { Controller } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Controller()
export class AppController {
  getHello(): Observable<string> {
    return of('Hello');
  }
}
