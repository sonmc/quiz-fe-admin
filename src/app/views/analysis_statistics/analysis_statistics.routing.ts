import { Routes } from '@angular/router';
import { AnalysisStatisticsComponent } from './analysis_statistics.component';


export const AnalysisStatisticsRoutes: Routes = [{
    path: '',
    children: [{
        path: '',
        component: AnalysisStatisticsComponent
    }]
}];
