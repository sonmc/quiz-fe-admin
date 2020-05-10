import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { KrService } from '../../containers/services/kr/kr.service';
import { Router } from '@angular/router';
import { SUCCESS_STATUS } from '../../containers/constants/config';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-key-result',
  templateUrl: './key-result.component.html',
  styleUrls: ['./key-result.component.css']
})
export class KeyResultComponent implements OnInit {
  @ViewChild('modalCreate') modalCreate: ModalDirective;
  @Input() krs: any;
  isNoData: boolean = false;
  kr: Object = {
    krId: 0,
    description: "",
    objectiveId: 0,
    measurement: "",
    baseValue: 0,
    currentValue: 0,
    targetValue: 0,
    startDate: null,
    endDate: null,
    employeeId: 0,
    weeks: []
  };
  objectiveId: number = 0;
  title: string = "Create";
  constructor(public service: KrService, public router: Router) {

  }

  ngOnInit(): void {
  }
  save = () => {
    this.kr["employeeId"] = parseInt(this.kr["employeeId"]);
    this.kr["objectiveId"] = this.objectiveId;
    if (this.title == "Create") {
      this.service.create(this.kr)
        .then(res => {
          if (SUCCESS_STATUS == res['status']) {
            this.krs.push(res["data"]);
            this.modalCreate.hide();
            if (this.krs.length > 0) {
              this.isNoData = true;
            } else {
              this.isNoData = false;
            }
          }
        }).catch(e => {
          window.alert('Connection Error !');
        })
    }
    // else {
    //   this.service.update(this.kr)
    //     .then(res => {
    //       if (SUCCESS_STATUS == res['status']) {
    //         this.krs = res['data'];
    //       }
    //     }).catch(e => {
    //       window.alert('Connection Error !');
    //     })
    // }
  }
  delete = (krId) => {
    this.service.delete(krId)
      .then(res => {
        if (SUCCESS_STATUS == res['status']) {
          for (let index = 0; index < this.krs.length; index++) {
            if (this.krs[index].krId == krId) {
              this.krs.splice(index, 1);
            }
          }
          this.modalCreate.hide();
          if (this.krs.length > 0) {
            this.isNoData = true;
          } else {
            this.isNoData = false;
          }
        }
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }
  openModalCreate = () => {
    this.title = "Create";
    this.kr = {
      krId: 0,
      description: "",
      objectiveId: 0,
      measurement: "",
      baseValue: "",
      targetValue: "",
      startDate: null,
      endDate: null,
      employeeId: 0,
      weeks: []
    };
    this.modalCreate.show();
  }
  back = () => {
    window.history.back();
  }
  goListPlan = (krId) => {
    this.router.navigate(['/plan', krId]);
  } 
}
