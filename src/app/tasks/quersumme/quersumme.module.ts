import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuersummePageRoutingModule } from './quersumme-routing.module';

import { QuersummePage } from './quersumme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuersummePageRoutingModule
  ],
  declarations: [QuersummePage]
})
export class QuersummePageModule {}
