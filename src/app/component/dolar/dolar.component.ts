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
