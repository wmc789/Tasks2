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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
