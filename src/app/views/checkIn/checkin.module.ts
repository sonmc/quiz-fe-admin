import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CheckInComponent } from './checkin.component';
import { CheckInRoutingModule } from './checkin-routing.module';
@NgModule({
  imports: [
    CheckInRoutingModule,
    FormsModule,
    CommonModule,
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  declarations: [CheckInComponent]
})
export class CheckInModule {

}
