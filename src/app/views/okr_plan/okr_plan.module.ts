import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompanyStructureRoutes } from './okr_plan.routing';
import { PlanQuarterComponent } from './plan_quarter/plan_quarter.component';
import { PlanYearComponent } from './plan_year/plan_year.component';



@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(CompanyStructureRoutes),
        FormsModule
    ],
    declarations: [PlanYearComponent, PlanQuarterComponent]
})

export class OKRPlanModule { }
