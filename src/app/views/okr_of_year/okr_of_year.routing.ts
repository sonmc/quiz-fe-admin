import { Routes } from '@angular/router';

import { OkrOfYearComponent } from './okr_of_year.component';

export const OkrOfYearRoutes: Routes = [{
    path: '',
    children: [{
        path: '',
        component: OkrOfYearComponent
    }]
}];
