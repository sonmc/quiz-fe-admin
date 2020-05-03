import { NgModule, ViewChild } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms'; 
import { PlanComponent } from './plan.component';
import { PlanRoutingModule } from './plan-routing.module';
@NgModule({
  imports: [
    PlanRoutingModule,
    TabsModule,
    FormsModule,
    CommonModule,
    ModalModule.forRoot()
  ],
  declarations: [PlanComponent]
})
export class PlanModule {

}
