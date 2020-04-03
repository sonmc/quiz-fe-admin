import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [{
    path: '',
    redirectTo: 'pages/branch',
    pathMatch: 'full',
}, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
        path: 'company_structure',
        loadChildren: './views/company_structure/company_structure.module#CompanyStructureModule'
    },
    {
        path: 'okr_plan',
        loadChildren: './views/okr_plan/okr_plan.module#OKRPlanModule'
    },
    {
        path: 'okr_quarter',
        loadChildren: './views/okr_quarter/okr_quarter.module#OkrQuarterModule'
    },
    {
        path: 'okr_of_year',
        loadChildren: './views/okr_of_year/okr_of_year.module#OkrOfYearModule'
    },
    {
        path: 'my_okr',
        loadChildren: './views/my_okr/my_okr.module#MyOkrModule'
    },
    {
        path: 'okr_teaching',
        loadChildren: './views/okr_teaching/okr_teaching.module#OkrTeachingModule'
    },
    {
        path: 'analysis_statistics',
        loadChildren: './views/analysis_statistics/analysis_statistics.module#AnalysisStatisticsModule'
    }]
}, {
    path: '',
    component: AuthLayoutComponent,
    children: [{
        path: 'core',
        loadChildren: './views/login/login.module#LoginModule'
    }]
}
];
