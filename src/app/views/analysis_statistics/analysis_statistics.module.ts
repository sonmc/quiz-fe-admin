import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnalysisStatisticsRoutes } from './analysis_statistics.routing';
import { AnalysisStatisticsComponent } from './analysis_statistics.component';



@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AnalysisStatisticsRoutes),
        FormsModule
    ],
    declarations: [AnalysisStatisticsComponent]
})

export class AnalysisStatisticsModule { }
