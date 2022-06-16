import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidBracesPageRoutingModule } from './valid-braces-routing.module';

import { ValidBracesPage } from './valid-braces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidBracesPageRoutingModule
  ],
  declarations: [ValidBracesPage]
})
export class ValidBracesPageModule {}
