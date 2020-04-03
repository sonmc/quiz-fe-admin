import { Routes } from '@angular/router';
import { OkrTeachingComponent } from './okr_teaching.component';


export const OkrTeachingRoutes: Routes = [{
    path: '',
    children: [{
        path: '',
        component: OkrTeachingComponent
    }]
}];
