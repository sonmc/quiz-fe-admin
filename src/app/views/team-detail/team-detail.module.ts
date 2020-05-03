import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeamDetailRoutingModule } from './team-detail-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TeamDetailComponent } from './team-detail.component';


@NgModule({
  imports: [
    TeamDetailRoutingModule,
    CommonModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  declarations: [TeamDetailComponent]
})
export class TeamDetailModule { }
