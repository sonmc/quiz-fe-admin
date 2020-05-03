import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamDetailComponent } from './team-detail.component';


const routes: Routes = [
  {
    path: '',
    component: TeamDetailComponent,
    data: {
      title: 'Okr Of The Year'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamDetailRoutingModule { }
