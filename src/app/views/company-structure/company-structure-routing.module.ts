import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamComponent } from './team.component';
import { EmployeeComponent } from './employee.component';
import { UserRoleComponent } from './user-role.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Company Structure'
    },
    children: [
      {
        path: '',
        redirectTo: 'cards'
      },
      {
        path: 'team',
        component: TeamComponent
      },
      {
        path: 'user-role',
        component: UserRoleComponent
      },
      {
        path: 'employee',
        component: EmployeeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyStructureRoutingModule { }
