import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParentPageRoutingModule } from './parent-routing.module';

import { ParentPage } from './parent.page';

import { Child2Component } from './child2/child2.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParentPageRoutingModule
  ],
  declarations: [ParentPage, Child2Component]
})
export class ParentPageModule {}
