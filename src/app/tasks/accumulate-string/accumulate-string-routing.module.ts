import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccumulateStringPage } from './accumulate-string.page';

const routes: Routes = [
  {
    path: '',
    component: AccumulateStringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccumulateStringPageRoutingModule {}
