import { NgModule } from '@angular/core';
import { AssignmentRoutingModule } from './assignment-routing.module';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AssignmentComponent } from './assignment.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  imports: [
    AssignmentRoutingModule,
    CommonModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  declarations: [AssignmentComponent]
})
export class AssignmentModule { }
