import { Routes } from '@angular/router';

import { BranchComponent } from './branchs/branch.component';
import { EmployeeComponent } from './employees/employee.component';
import { TeamComponent } from './teams/team.component';
import { UserRoleComponent } from './user_roles/user_role.component';

export const CompanyStructureRoutes: Routes = [{
    path: '',
    children: [{
        path: 'branch',
        component: BranchComponent
    }, {
        path: 'employee',
        component: EmployeeComponent
    }, {
        path: 'team',
        component: TeamComponent
    }, {
        path: 'user_role',
        component: UserRoleComponent
    }]
}];
