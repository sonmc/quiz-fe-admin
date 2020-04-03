import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OkrQuarterRoutes } from './okr_quarter.routing';
import { ObjectiveComponent } from './objective/objective.component';
import { KrComponent } from './kr/kr.component';



@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(OkrQuarterRoutes),
        FormsModule
    ],
    declarations: [ObjectiveComponent, KrComponent]
})

export class OkrQuarterModule { }
