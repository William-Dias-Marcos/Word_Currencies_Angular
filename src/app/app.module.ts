import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import '@angular/common/locales/global/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { DolarComponent } from './component/dolar/dolar.component';
import { EuroComponent } from './component/euro/euro.component';
import { LibraComponent } from './component/libra/libra.component';
import { BitcoinComponent } from './component/bitcoin/bitcoin.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, DolarComponent, EuroComponent, LibraComponent, BitcoinComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
