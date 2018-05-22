import { NgModule } from '@angular/core';
import { HomeComponent } from 'app/components/home/home.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
    imports: [LayoutModule],
    declarations: [HomeComponent]})

export class HomeModule { }
