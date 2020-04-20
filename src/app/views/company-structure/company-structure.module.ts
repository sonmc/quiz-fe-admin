// Angular
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination'; 

// Components
import { UserRoleComponent } from './user-role.component';
import { EmployeeComponent } from './employee.component';
import { TeamComponent } from './team.component';
import { CompanyStructureRoutingModule } from './company-structure-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal'; 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CompanyStructureRoutingModule,
    BsDropdownModule.forRoot(),

    CarouselModule.forRoot(),
    PaginationModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
    TeamComponent,
    EmployeeComponent,
    UserRoleComponent
  ]
})
export class CompanyStructureModule { }
