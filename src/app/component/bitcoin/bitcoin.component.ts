import { Component } from '@angular/core';

import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css'],
})
export class BitcoinComponent {
  currency: any;

  show = false;

  valueInputBRL: any;
  valueInputBTC: any;

  calculateConversionUSD() {
    let USD = this.currency.BTCBRL.ask;
    let result = USD * this.valueInputBTC;

    this.valueInputBRL = result.toFixed(2);
  }

  calculateConversionBRL() {
    let USD = this.currency.BTCBRL.ask;
    let result = this.valueInputBRL / USD;

    this.valueInputBTC = result;
  }

  clearInput() {
    this.valueInputBRL = '';
    this.valueInputBTC = '';
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
