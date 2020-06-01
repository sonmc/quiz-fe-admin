import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { ObjectiveComponent } from '../objective/objective.component';
import { TabsModule } from 'ngx-bootstrap/tabs';  

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TabsModule.forRoot(),
        ModalModule.forRoot()
    ],
    declarations: [ObjectiveComponent],
    exports: [ObjectiveComponent]
})
export class ObjectiveModule { }
