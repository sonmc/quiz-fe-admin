import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { ObjectiveDetailComponent } from './objective-detail.component';
 

const routes: Routes = [
  {
    path: '',
    component: ObjectiveDetailComponent,
    data: {
      title: 'Okr Of The Quarter'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KrRoutingModule {}
