import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OkrOfYearComponent } from './okr-of-the-year.component';

const routes: Routes = [
  {
    path: '',
    component: OkrOfYearComponent,
    data: {
      title: 'Okr Of The Year'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OkrOfYearRoutingModule {}
