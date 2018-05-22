import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AccountComponent } from './components/account/account.component';
import { BarcodeComponent } from './components/barcode/barcode.component';
import { LayoutModule } from './components/layout/layout.module';
import { MatButtonModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import { ScannerComponent } from './shared/components/scanner/scanner.component';

import { BarcodeFormComponent } from './components/barcode/barcode-form/barcode-form.component';
import { HomeModule } from './components/home/home.module';
import { GeolocModule } from './components/geoloc/geoloc.module';
import { ProductComponent } from './components/product/product.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    BarcodeComponent,
    ScannerComponent,
    BarcodeFormComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    LayoutModule,
    GeolocModule,
    HomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
