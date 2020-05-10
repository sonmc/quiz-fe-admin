
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DoDService } from '../../containers/services/dod/dod.service';
import { SUCCESS_STATUS } from '../../containers/constants/config';
import { ModalDirective } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-dod',
  templateUrl: './dod.component.html',
  styleUrls: ['./dod.component.css']
})
export class DodComponent implements OnInit {
  @ViewChild('modalCreate') modalCreate: ModalDirective;
  @Input() dods: any;
  title: string = "Create";
  dod: Object = {
    dodId: 0,
    content: "",
    objectiveId: 0
  }
  isNoData: boolean = false;
  objectiveId: number = 0;
  constructor(public dodService: DoDService) {

  }

  ngOnInit(): void {
  }
  deleteDod = (dodId) => {
    this.dodService.delete(dodId)
      .then(res => {
        if (SUCCESS_STATUS == res['status']) {
          for (let index = 0; index < this.dods.length; index++) {
            if (this.dods[index].dodId == dodId) {
              this.dods.splice(index, 1);
            }
          }
          if (this.dods.length > 0) {
            this.isNoData = true;
          } else {
            this.isNoData = false;
          }
        }
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }
  openModalCreateDod = () => {
    this.dod = {
      dodId: 0,
      content: "",
      objectiveId: 0
    }
    this.modalCreate.show();
  }
  save = () => {
    this.dod["objectiveId"] = this.objectiveId;
    this.dodService.create(this.dod)
      .then(res => {
        if (SUCCESS_STATUS == res['status']) {
          this.dods.push(res['data']);
          if (this.dods.length > 0) {
            this.isNoData = true;
          } else {
            this.isNoData = false;
          }
        }
        this.modalCreate.hide();
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }
}
