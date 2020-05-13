import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './views/layout/layout.component';
import { LoginComponent } from './views/login/login.component';
import { AdminGuard } from './containers/guards/admin/admin.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  }, {
    path: '',
    component: LayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'my-okr',
        loadChildren: () => import('./views/my-okr/my-okr.module').then(m => m.MyOkrModule),
        canActivate: [AdminGuard]
      }, {
        path: 'team',
        loadChildren: () => import('./views/team/team.module').then(m => m.TeamModule),
        canActivate: [AdminGuard]
      }, {
        path: 'teamDetail/:id/:name',
        loadChildren: () => import('./views/team-detail/team-detail.module').then(m => m.TeamDetailModule),
        canActivate: [AdminGuard]
      }, {
        path: 'employee',
        loadChildren: () => import('./views/employee/employee.module').then(m => m.EmployeeModule),
        canActivate: [AdminGuard]
      }, {
        path: 'analysis-statistics',
        loadChildren: () => import('./views/analysis-statistics/analysis-statistics.module').then(m => m.AnalysisStatisticsModule),
        canActivate: [AdminGuard]
      }, {
        path: 'okr-of-the-year',
        loadChildren: () => import('./views/okr-of-the-year/okr-of-the-year.module').then(m => m.OkrOfYearModule),
        canActivate: [AdminGuard]
      }, {
        path: 'okr-of-the-quarter',
        loadChildren: () => import('./views/okr-of-the-quarter/okr-of-the-quarter.module').then(m => m.OkrOfQuarterModule),
        canActivate: [AdminGuard]
      }, {
        path: 'okr-teaching',
        loadChildren: () => import('./views/okr-teaching/okr-teaching.module').then(m => m.OkrTeachingModule)
      }, {
        path: 'o-detail/:id/:name',
        loadChildren: () => import('./views/objective-detail/objective-detail.module').then(m => m.ObjectiveDetailModule),
        canActivate: [AdminGuard]
      }, {
        path: 'checkin',
        loadChildren: () => import('./views/checkIn/checkin.module').then(m => m.CheckInModule),
        canActivate: [AdminGuard]
      }, {
        path: 'plan/:krId',
        loadChildren: () => import('./views/plan/plan.module').then(m => m.PlanModule),
        canActivate: [AdminGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AdminGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
