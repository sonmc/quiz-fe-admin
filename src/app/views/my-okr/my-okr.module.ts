import { NgModule } from '@angular/core';
import { MyOkrRoutingModule } from './my-okr-routing.module';
import { MyOkrComponent } from './my-okr.component';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms'; 
import { ObjectiveModule } from '../objective/objective.module';


@NgModule({
  imports: [
    MyOkrRoutingModule,
    CommonModule,
    FormsModule,
    ObjectiveModule,
    ModalModule.forRoot()
  ],
  declarations: [MyOkrComponent]
})
export class MyOkrModule { }
