import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private url =
    'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL';

  constructor(private http: HttpClient) {}

  getCurrencys() {
    return this.http.get(this.url);
  }
}
