import { NgModule } from '@angular/core';
import { MyOkrRoutingModule } from './my-okr-routing.module';
import { MyOkrComponent } from './my-okr.component';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal'; 
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    MyOkrRoutingModule,
    CommonModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  declarations: [MyOkrComponent]
})
export class MyOkrModule { }
