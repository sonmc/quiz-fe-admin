import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OkrOfYearRoutes } from './okr_of_year.routing';
import { OkrOfYearComponent } from './okr_of_year.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(OkrOfYearRoutes),
        FormsModule
    ],
    declarations: [OkrOfYearComponent]
})

export class OkrOfYearModule { }
