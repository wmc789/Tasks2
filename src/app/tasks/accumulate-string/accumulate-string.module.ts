import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccumulateStringPageRoutingModule } from './accumulate-string-routing.module';

import { AccumulateStringPage } from './accumulate-string.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccumulateStringPageRoutingModule
  ],
  declarations: [AccumulateStringPage]
})
export class AccumulateStringPageModule {}
