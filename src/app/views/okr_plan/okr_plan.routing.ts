import { Routes } from '@angular/router';
import { PlanQuarterComponent } from './plan_quarter/plan_quarter.component';
import { PlanYearComponent } from './plan_year/plan_year.component';


export const CompanyStructureRoutes: Routes = [{
    path: '',
    children: [{
        path: 'plan_quarter',
        component: PlanQuarterComponent
    }, {
        path: 'plan_year',
        component: PlanYearComponent
    }]
}];
