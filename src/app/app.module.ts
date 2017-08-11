import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { Routing } from './app.routing';
import { LayoutModule } from './layout/layout.module';

import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService } from './_services/index';

import { SharedModule } from './shared/shared.module';

import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    MaterialModule,
    LayoutModule,
    SharedModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
