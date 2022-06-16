import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidBracesPage } from './valid-braces.page';

const routes: Routes = [
  {
    path: '',
    component: ValidBracesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidBracesPageRoutingModule {}
