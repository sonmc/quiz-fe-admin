import { NgModule } from '@angular/core';
import { GroupRoutingModule } from './group-routing.module';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GroupComponent } from './group.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  imports: [
    GroupRoutingModule,
    CommonModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  declarations: [GroupComponent]
})
export class GroupModule { }
