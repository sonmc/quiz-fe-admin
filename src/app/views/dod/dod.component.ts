
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
  @Input() objectiveId: Number;
  title: string = "Create";
  dods: any = [];
  dod: Object = {
    dodId: 0,
    content: "",
    objectiveId: 0
  }
  isNoData: boolean = false;
  constructor(public dodService: DoDService) { }
  ngOnInit() {
    if (this.objectiveId) {
      this.getDod(this.objectiveId);
    }
  }
  getDod(objectiveId) {
    this.dodService.get(objectiveId)
      .then(res => {
        if (SUCCESS_STATUS == res['status']) {
          this.dods = res['data'];
          this.checkLength(this.dods);
        }

      }).catch(e => {
        window.alert('Connection Error !');
      })
    return this.dods;
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
          this.checkLength(this.dods);
        }
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }
  openModalCreate = () => {
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
          this.checkLength(this.dods);
        }
        this.modalCreate.hide();
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }
  checkLength(dods) {
    if (dods.length > 0) {
      this.isNoData = true;
    } else {
      this.isNoData = false;
    }
  }
  back(){
    window.history.back();
  }
}
