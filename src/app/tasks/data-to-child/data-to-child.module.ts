import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataToChildPageRoutingModule } from './data-to-child-routing.module';

import { DataToChildPage } from './data-to-child.page';
import { ChildComponent } from './child/child.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataToChildPageRoutingModule
  ],
  declarations: [DataToChildPage, ChildComponent]
})
export class DataToChildPageModule {}
