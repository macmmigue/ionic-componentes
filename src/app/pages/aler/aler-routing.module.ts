import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlerPage } from './aler.page';

const routes: Routes = [
  {
    path: '',
    component: AlerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlerPageRoutingModule {}
