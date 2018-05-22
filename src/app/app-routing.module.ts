import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {BarcodeComponent} from './components/barcode/barcode.component';
import {GeolocComponent} from './components/geoloc/geoloc.component';
import {AccountComponent} from './components/account/account.component';
import {ProductComponent} from './components/product/product.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'account', component: AccountComponent },
  { path: 'home', component: HomeComponent },
  { path: 'barcode', component: BarcodeComponent},
  { path: 'geoloc', component: GeolocComponent },
  { path: 'product', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      enableTracing: false
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
