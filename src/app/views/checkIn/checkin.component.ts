import { Component, OnInit, ViewChild } from '@angular/core';
import { SUCCESS_STATUS } from '../../containers/constants/config';
import { CheckInService } from '../../containers/services/checkin/checkin.service';

@Component({
  templateUrl: 'checkin.component.html',
  styleUrls: ['./checkin.component.css']
})

export class CheckInComponent implements OnInit {
  datas: any;

  constructor(public service: CheckInService) {
  }

  ngOnInit(): void {
    var branchId = 1;
    this.service.get(branchId)
      .then(res => {
        if (SUCCESS_STATUS == res['status']) {
          this.datas = res['data'];
          for (let i = 0; i < this.datas.length; i++) {
            for (let index = 0; index < this.datas[i].krs.length; index++) {
              this.datas[i].krs[index].process = ((this.datas[i].krs[index].currentValue / this.datas[i].krs[index].targetValue) * 100) + "%";
              this.datas[i].krs[index].isEdit = false;
            }
          }
        }
      }).catch(e => {
        // window.alert('Connection Error !');
      })
  }
  openEditer = (krId, week) => {
    for (let i = 0; i < this.datas.length; i++) {
      for (let index = 0; index < this.datas[i].krs.length; index++) {
        if (this.datas[i].krs[index].krId == krId) {
          for (let j = 0; j < this.datas[i].krs[index].weeks.length; j++) {
            if (this.datas[i].krs[index].weeks[j].key == week) {
              this.datas[i].krs[index].weeks[j].isEdit = true;
            }
          }
        }
      }
    }
  }
  hideEditer = (kr, w) => {
    this.service.checkin(kr.krId, w.weekId, w.value)
      .then(res => {
        if (SUCCESS_STATUS == res['status']) {
          for (let i = 0; i < this.datas.length; i++) {
            for (let index = 0; index < this.datas[i].krs.length; index++) {
              for (let j = 0; j < this.datas[i].krs[index].weeks.length; j++) {
                this.datas[i].krs[index].weeks[j].isEdit = false;
              }
            }
          }
        }
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }
}
