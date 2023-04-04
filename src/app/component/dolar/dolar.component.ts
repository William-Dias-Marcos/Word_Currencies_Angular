import { Component } from '@angular/core';

import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-dolar',
  templateUrl: './dolar.component.html',
  styleUrls: ['./dolar.component.css'],
})
export class DolarComponent {
  currency: any;

  show = false;

  valueInputBRL: number = 0;
  valueInputUSD: number = 0;

  calculateConversionUSD() {
    let USD = this.currency.USDBRL.ask;
    this.valueInputBRL = USD * this.valueInputUSD;
  }

  calculateConversionBRL() {
    let USD = this.currency.USDBRL.ask;
    this.valueInputUSD = this.valueInputBRL / USD;
  }

  clearInput() {
    this.valueInputBRL = 0;
    this.valueInputUSD = 0;
  }

  constructor(private currencyService: CurrencyService) {
    this.getWordCurrencys();
  }

  getWordCurrencys(): void {
    this.currencyService
      .getCurrencys()
      .subscribe(
        (currencys) => ((this.currency = currencys), (this.show = true))
      );
  }
}
