import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataToChildPage } from './data-to-child.page';

const routes: Routes = [
  {
    path: '',
    component: DataToChildPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataToChildPageRoutingModule {}
