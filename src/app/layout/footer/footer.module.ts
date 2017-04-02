import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
//import { BrowserModule }  from '@angular/platform-browser';

import { SharedModule } from '../../shared/shared.module';
import { FooterComponent } from './index';
import { FooterRoutingModule } from './footer-routing.module';


@NgModule({
  imports: [
    SharedModule,
    MaterialModule
  ],
  declarations: [
    FooterComponent,
  ],
  exports: [
    FooterComponent,
  ],
})

export class FooterModule { }
