import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private readonly httpService: HttpService) { }

  public getCards(): Promise<any> {
    return this.httpService.get(`https://bhdleon-interview-test.herokuapp.com/cards`).toPromise();
  }
}
