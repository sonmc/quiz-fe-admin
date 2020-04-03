import { Routes } from '@angular/router';
import { ObjectiveComponent } from './objective/objective.component';
import { KrComponent } from './kr/kr.component';


export const OkrQuarterRoutes: Routes = [{
    path: '',
    children: [{
        path: 'objective',
        component: ObjectiveComponent
    }, {
        path: 'kr',
        component: KrComponent
    }]
}];
