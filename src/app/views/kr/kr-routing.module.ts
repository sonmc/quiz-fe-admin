import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { KrComponent } from './kr.component';
 

const routes: Routes = [
  {
    path: '',
    component: KrComponent,
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
