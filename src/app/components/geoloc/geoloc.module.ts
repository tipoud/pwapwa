import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { AppConstants} from '../../shared/utils/app-constants';
import { GeolocComponent} from './geoloc.component';
import { MatButtonModule, MatProgressSpinnerModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LayoutModule} from '../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: AppConstants.GOOGLE_API_KEY,
      libraries: ['places']
    }),
    MatButtonModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule
  ],
  declarations: [GeolocComponent]
})
export class GeolocModule {}
