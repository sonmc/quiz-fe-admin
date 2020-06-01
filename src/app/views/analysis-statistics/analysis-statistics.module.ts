import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AnalysisStatisticsRoutingModule } from './analysis-statistics-routing.module';
import { AnalysisStatisticsComponent } from './analysis-statistics.component';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
  imports: [
    FormsModule,
    AnalysisStatisticsRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ AnalysisStatisticsComponent ]
})
export class AnalysisStatisticsModule { }
