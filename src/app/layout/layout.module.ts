
import { NgModule } from '@angular/core';

import { FooterModule } from './footer/footer.module';

@NgModule({
  imports: [
    FooterModule
  ],
  exports: [
    FooterModule
  ],
})

export class LayoutModule { }
