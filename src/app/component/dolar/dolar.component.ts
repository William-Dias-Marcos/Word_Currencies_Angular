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

  valueInputBRL: any = '';
  valueInputUSD: any = '';

  calculateConversionUSD(dolar: any) {
    let USD = this.currency.USDBRL.ask;
    this.valueInputBRL = USD * dolar;
  }

  calculateConversionBRL(real: any) {
    let USD = this.currency.USDBRL.ask;
    this.valueInputUSD = real / USD;
  }

  clearInput() {
    this.calculateConversionUSD(0);
    this.calculateConversionBRL(0);
  }

  constructor(private currencyService: CurrencyService) {
    this.getWordCurrencys();
  }

  ngOnInit(): void {}

  getWordCurrencys(): void {
    this.currencyService
      .getCurrencys()
      .subscribe(
        (currencys) => ((this.currency = currencys), (this.show = true))
      );
  }
}
