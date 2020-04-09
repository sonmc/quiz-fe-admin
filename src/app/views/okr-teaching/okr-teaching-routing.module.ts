import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OkrTeachingComponent } from './okr-teaching.component';

const routes: Routes = [
  {
    path: '',
    component: OkrTeachingComponent,
    data: {
      title: 'Okr Teaching'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OkrTeachingRoutingModule { }
