import { Routes } from '@angular/router';
import { MyOkrComponent } from './my_okr.component';


export const MyOkrRoutes: Routes = [{
    path: '',
    children: [{
        path: '',
        component: MyOkrComponent
    }]
}];
