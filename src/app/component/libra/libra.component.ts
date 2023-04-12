import { Component } from '@angular/core';

import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-libra',
  templateUrl: './libra.component.html',
  styleUrls: ['./libra.component.css'],
})
export class LibraComponent {
  currency: any;

  show = false;

  valueInputBRL: any;
  valueInputGBP: any;

  calculateConversionUSD() {
    let USD = this.currency.GBPBRL.ask;
    let result = USD * this.valueInputGBP;

    this.valueInputBRL = result.toFixed(2);
  }

  calculateConversionBRL() {
    let USD = this.currency.GBPBRL.ask;
    let result = this.valueInputBRL / USD;

    this.valueInputGBP = result.toFixed(2);
  }

  clearInput() {
    this.valueInputBRL = '';
    this.valueInputGBP = '';
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
