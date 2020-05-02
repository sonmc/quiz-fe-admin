import { NgModule, ViewChild } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { KrComponent } from './kr.component';
import { KrRoutingModule } from './kr-routing.module';
@NgModule({
  imports: [
    KrRoutingModule,
    TabsModule,
    FormsModule,
    CommonModule,
    ModalModule.forRoot()
  ],
  declarations: [KrComponent]
})
export class KRModule {

}
