import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'accumulate-string',
    pathMatch: 'full'
  },
  {
    path: 'accumulate-string',
    loadChildren: () => import('./tasks/accumulate-string/accumulate-string.module').then( m => m.AccumulateStringPageModule)
  },
  {
    path: 'valid-braces',
    loadChildren: () => import('./tasks/valid-braces/valid-braces.module').then( m => m.ValidBracesPageModule)
  },
  {
    path: 'chocolate-task',
    loadChildren: () => import('./tasks/chocolate-task/chocolate-task.module').then( m => m.ChocolateTaskPageModule)
  },
  {
    path: 'quersumme',
    loadChildren: () => import('./tasks/quersumme/quersumme.module').then( m => m.QuersummePageModule)
  },
  {
    path: 'data-to-child',
    loadChildren: () => import('./tasks/data-to-child/data-to-child.module').then( m => m.DataToChildPageModule)
  },
  {
    path: 'parent',
    loadChildren: () => import('./tasks/parent/parent.module').then( m => m.ParentPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
