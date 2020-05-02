import { Component, OnInit, ViewChild } from '@angular/core';
import { MyOkrService } from '../../containers/services/myOkr/my-okr.service';
import { SUCCESS_STATUS } from '../../containers/constants/config';
import { AuthService } from '../../containers/services/auth/auth.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  templateUrl: 'my-okr.component.html'
})
export class MyOkrComponent implements OnInit {
  @ViewChild('modalCreate') modalCreate: ModalDirective;
  objectives: any;
  objective: Object = {
    objectiveName: "",
    startDate: "",
    endDate: "",
    description: "",
    employeeId: 0
  }
  currentUser: any;
  constructor(public myOkrService: MyOkrService, public authService: AuthService) {
  }

  ngOnInit(): void {
    this.currentUser = this.authService.getLocal();
    var myOkr = {
      employeeId: this.currentUser.employeeId,
      branchId: 0,
      departmentId: 0
    }
    this.myOkrService.get(myOkr)
      .then(res => {
        if (SUCCESS_STATUS == res['status']) {
          this.objectives = res['data'];
        }
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }
  openModalCreate = () => {
    this.modalCreate.show()
  }
  create = () => {
    this.objective['employeeId'] = this.currentUser.employeeId;
    this.myOkrService.create(this.objective)
      .then(res => {
        if (res['status'] == SUCCESS_STATUS) {
          this.objectives.push(res['data']);
          this.modalCreate.hide();
        } else {
          //   this.messageError = res['message'];
        }
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }
}
