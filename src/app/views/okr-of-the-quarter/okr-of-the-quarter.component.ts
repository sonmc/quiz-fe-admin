import { Component, OnInit, ViewChild } from '@angular/core';
import { SUCCESS_STATUS } from '../../containers/constants/config';
import { OkrQuarterService } from '../../containers/services/okrOfQuarter/okr-of-quarter.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'okr-of-the-quarter.component.html'
})
export class OkrOfQuarterComponent implements OnInit {
  @ViewChild('modalCreate') modalCreate: ModalDirective;

  quarterId: Number;
  objective: Object = {
    objectiveName: "",
    startDate: "",
    endDate: "",
    description: "",
    employeeId: null,
    quarter: 0
  }
  datas: any;
  constructor(public service: OkrQuarterService, public router: Router) {
  }

  ngOnInit(): void {
    this.service.get()
      .then(res => {
        if (SUCCESS_STATUS == res['status']) {
          this.datas = res['data'];
        }
      }).catch(e => {
        window.alert('Connection Error !');
      })

  }
  setActiveTab = () => {

  }
  create = () => {
    this.objective["quarter"] = this.quarterId;
    this.service.create(this.objective)
      .then(res => {
        if (res['status'] == SUCCESS_STATUS) {
          for (let index = 0; index < this.datas.length; index++) {
            if (this.datas[index].quarterId == this.quarterId) {
              this.datas[index].objectives.push(res['data']);
            }
          }
          this.modalCreate.hide();
        } else {
          //   this.messageError = res['message'];
        }
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }
  openModalCreate = (quarterId) => {
    this.quarterId = quarterId;
    this.modalCreate.show()
  }
  goKrList = (objectiveId) => {
    this.router.navigate(['/kr'], { state: { oId: objectiveId } });
  }
}
