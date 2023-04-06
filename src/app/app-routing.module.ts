import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BitcoinComponent } from './component/bitcoin/bitcoin.component';

import { DolarComponent } from './component/dolar/dolar.component';
import { EuroComponent } from './component/euro/euro.component';
import { LibraComponent } from './component/libra/libra.component';

const routes: Routes = [
  { path: '', component: DolarComponent },
  { path: 'euro', component: EuroComponent },
  { path: 'libra', component: LibraComponent },
  { path: 'bitcoin', component: BitcoinComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
