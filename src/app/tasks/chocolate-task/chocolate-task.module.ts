import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChocolateTaskPageRoutingModule } from './chocolate-task-routing.module';

import { ChocolateTaskPage } from './chocolate-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChocolateTaskPageRoutingModule
  ],
  declarations: [ChocolateTaskPage]
})
export class ChocolateTaskPageModule {}
