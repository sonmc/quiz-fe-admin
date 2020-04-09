import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OkrOfQuarterComponent } from './okr-of-the-quarter.component';
 

const routes: Routes = [
  {
    path: '',
    component: OkrOfQuarterComponent,
    data: {
      title: 'Okr Of The Quarter'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OkrOfQuarterRoutingModule {}
