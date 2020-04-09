import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyOkrComponent } from './my-okr.component';
 

const routes: Routes = [
  {
    path: '',
    component: MyOkrComponent,
    data: {
      title: 'My Okr'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyOkrRoutingModule {}
