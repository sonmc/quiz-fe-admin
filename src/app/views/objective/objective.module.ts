import { NgModule } from '@angular/core';
import { ObjectiveRoutingModule } from './objective-routing.module';
import { ObjectiveComponent } from './objective.component';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    ObjectiveRoutingModule,
    CommonModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  declarations: [ObjectiveComponent]
})
export class ObjectiveModule { }
