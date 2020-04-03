import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OkrTeachingRoutes } from './okr_teaching.routing';
import { OkrTeachingComponent } from './okr_teaching.component';



@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(OkrTeachingRoutes),
        FormsModule
    ],
    declarations: [OkrTeachingComponent]
})

export class OkrTeachingModule { }
