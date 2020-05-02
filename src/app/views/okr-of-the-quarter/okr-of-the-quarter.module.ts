import { NgModule, ViewChild } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { OkrOfQuarterComponent } from './okr-of-the-quarter.component';
import { OkrOfQuarterRoutingModule } from './okr-of-the-quarter-routing.module';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    OkrOfQuarterRoutingModule,
    TabsModule,
    FormsModule,
    CommonModule,
    ModalModule.forRoot()
  ],
  declarations: [OkrOfQuarterComponent]
})
export class OkrOfQuarterModule {

}
