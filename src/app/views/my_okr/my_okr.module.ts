import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyOkrRoutes } from './my_okr.routing';
import { MyOkrComponent } from './my_okr.component';



@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(MyOkrRoutes),
        FormsModule
    ],
    declarations: [MyOkrComponent]
})

export class MyOkrModule { }
