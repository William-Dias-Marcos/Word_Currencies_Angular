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

  valueInputBRL: any;
  valueInputUSD: any;

  calculateConversionUSD() {
    let USD = this.currency.USDBRL.ask;
    let result = USD * this.valueInputUSD;

    this.valueInputBRL = result.toFixed(2);
  }

  calculateConversionBRL() {
    let USD = this.currency.USDBRL.ask;
    let result = this.valueInputBRL / USD;

    this.valueInputUSD = result.toFixed(2);
  }

  clearInput() {
    this.valueInputBRL = '';
    this.valueInputUSD = '';
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
