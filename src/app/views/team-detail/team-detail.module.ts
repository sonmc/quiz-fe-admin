import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeamDetailRoutingModule } from './team-detail-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TeamDetailComponent } from './team-detail.component';
import { TabsModule } from 'ngx-bootstrap/tabs'; 
import { ObjectiveModule } from '../objective/objective.module'; 
import { LSelect2Module } from 'ngx-select2';
@NgModule({
  imports: [
    TeamDetailRoutingModule,
    CommonModule,
    TabsModule,
    FormsModule, 
    ObjectiveModule,
    LSelect2Module,
    ModalModule.forRoot()
  ],
  declarations: [TeamDetailComponent]
})
export class TeamDetailModule { }
