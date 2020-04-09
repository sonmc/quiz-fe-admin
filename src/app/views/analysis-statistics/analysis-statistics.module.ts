import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AnalysisStatisticsRoutingModule } from './analysis-statistics-routing.module';
import { AnalysisStatisticsComponent } from './analysis-statistics.component';


@NgModule({
  imports: [
    AnalysisStatisticsRoutingModule,
    ChartsModule
  ],
  declarations: [AnalysisStatisticsComponent]
})
export class AnalysisStatisticsModule { }
