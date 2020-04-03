import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompanyStructureRoutes } from './company_structure.routing';
import { EmployeeComponent } from './employees/employee.component';
import { BranchComponent } from './branchs/branch.component';
import { UserRoleComponent } from './user_roles/user_role.component';
import { TeamComponent } from './teams/team.component';



@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(CompanyStructureRoutes),
        FormsModule
    ],
    declarations: [EmployeeComponent, BranchComponent, UserRoleComponent, TeamComponent]
})

export class CompanyStructureModule { }
