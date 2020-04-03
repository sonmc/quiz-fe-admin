import { Routes } from '@angular/router';

import { LoginComponent } from './login.component';

export const LoginRoutes: Routes = [{
    path: '',
    children: [{
        path: 'core/login',
        component: LoginComponent
    }]
}];
