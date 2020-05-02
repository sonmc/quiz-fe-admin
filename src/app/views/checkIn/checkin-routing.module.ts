import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import {  CheckInComponent } from './checkin.component';
 

const routes: Routes = [
  {
    path: '',
    component: CheckInComponent,
    data: {
      title: 'Check in'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckInRoutingModule {}
