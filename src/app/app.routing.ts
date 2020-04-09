import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './views/layout/layout.component';
import { LoginComponent } from './views/login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'okr-of-the-year',
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
        loadChildren: () => import('./views/my-okr/my-okr.module').then(m => m.MyOkrModule)
      }, {
        path: 'structure',
        loadChildren: () => import('./views/company-structure/company-structure.module').then(m => m.CompanyStructureModule)
      }, {
        path: 'user-role',
        loadChildren: () => import('./views/company-structure/company-structure.module').then(m => m.CompanyStructureModule)
      }, {
        path: 'analysis-statistics',
        loadChildren: () => import('./views/analysis-statistics/analysis-statistics.module').then(m => m.AnalysisStatisticsModule)
      }, {
        path: 'okr-of-the-year',
        loadChildren: () => import('./views/okr-of-the-year/okr-of-the-year.module').then(m => m.OkrOfYearModule)
      }, {
        path: 'okr-of-the-quarter',
        loadChildren: () => import('./views/okr-of-the-quarter/okr-of-the-quarter.module').then(m => m.OkrOfQuarterModule)
      }, {
        path: 'okr-teaching',
        loadChildren: () => import('./views/okr-teaching/okr-teaching.module').then(m => m.OkrTeachingModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
