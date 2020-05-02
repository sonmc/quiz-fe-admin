import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  imports: [
    TeamRoutingModule,
    CommonModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  declarations: [TeamComponent]
})
export class TeamModule { }
