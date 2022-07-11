import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuersummePage } from './quersumme.page';

const routes: Routes = [
  {
    path: '',
    component: QuersummePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuersummePageRoutingModule {}
