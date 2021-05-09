import { NgModule } from '@angular/core';
import { QuestionRoutingModule } from './question-routing.module';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuestionComponent } from './question.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  imports: [
    QuestionRoutingModule,
    CommonModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  declarations: [QuestionComponent]
})
export class QuestionModule { }
