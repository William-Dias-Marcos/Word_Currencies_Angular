import { Component } from '@angular/core';

import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-euro',
  templateUrl: './euro.component.html',
  styleUrls: ['./euro.component.css'],
})
export class EuroComponent {
  currency: any;

  show = false;

  valueInputBRL: any;
  valueInputEUR: any;

  calculateConversionUSD() {
    let USD = this.currency.EURBRL.ask;
    let result = USD * this.valueInputEUR;

    this.valueInputBRL = result.toFixed(2);
  }

  calculateConversionBRL() {
    let USD = this.currency.EURBRL.ask;
    let result = this.valueInputBRL / USD;

    this.valueInputEUR = result.toFixed(2);
  }

  clearInput() {
    this.valueInputBRL = '';
    this.valueInputEUR = '';
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
