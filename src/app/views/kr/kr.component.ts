import { Component, OnInit, ViewChild } from '@angular/core';
import { SUCCESS_STATUS } from '../../containers/constants/config';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { KrService } from '../../containers/services/kr/kr.service';

@Component({
  templateUrl: 'kr.component.html',
  styleUrls: ['./kr.component.css']
})
export class KrComponent implements OnInit {
  @ViewChild('modalCreate') modalCreate: ModalDirective;
  krs: any;
  constructor(public service: KrService) {
  }

  ngOnInit(): void {
    var state = window.history.state;
    var data = {
      objectiveId: state.oId,
      employeeId: 0
    } 
    this.service.get(data)
      .then(res => {
        if (SUCCESS_STATUS == res['status']) {
          this.krs = res['data'];
        }
      }).catch(e => {
       // window.alert('Connection Error !');
      })

  }
  setActiveTab = () => {

  }
  create = () => {

  }
  openModalCreate = () => {
    this.modalCreate.show()
  }
}
