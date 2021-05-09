import { NgModule } from '@angular/core';
import { CategoryRoutingModule } from './category-routing.module';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from './category.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  imports: [
    CategoryRoutingModule,
    CommonModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  declarations: [CategoryComponent]
})
export class CategoryModule { }
