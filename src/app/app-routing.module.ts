import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdmComponent } from './idm/idm.component';

const routes: Routes = [
  { path: '', redirectTo: 'idm', pathMatch: 'full' },
  {
    path: 'idm',
    loadChildren: () => import('./idm/idm.module').then((m) => m.IdmModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
