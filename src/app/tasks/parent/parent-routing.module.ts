import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentPage } from './parent.page';

const routes: Routes = [
  {
    path: '',
    component: ParentPage
  },
  /*{
    path: 'child2',
    loadChildren: () => import('./child2/child2.module').then( m => m.Child2PageModule)
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParentPageRoutingModule {}
