import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
//import { BrowserModule }  from '@angular/platform-browser';

import { SharedModule } from '../../shared/shared.module';
import { HeaderComponent } from './index';
import { HeaderRoutingModule } from './header-routing.module';


@NgModule({
  imports: [
    SharedModule,
    HeaderRoutingModule,
    MaterialModule
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ],
})

export class HeaderModule { }
