import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChocolateTaskPage } from './chocolate-task.page';

const routes: Routes = [
  {
    path: '',
    component: ChocolateTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChocolateTaskPageRoutingModule {}
