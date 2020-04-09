import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnalysisStatisticsComponent } from './analysis-statistics.component';

const routes: Routes = [
  {
    path: '',
    component: AnalysisStatisticsComponent,
    data: {
      title: 'Analysis Statistics'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalysisStatisticsRoutingModule {}
