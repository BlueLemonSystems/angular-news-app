import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule
  ]
})
export class MaterialModule { }
