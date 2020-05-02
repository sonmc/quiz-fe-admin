import { Component, OnInit, ViewChild } from '@angular/core'; 
import { UserService } from '../../containers/services/user/user.service';
import { SUCCESS_STATUS } from '../../containers/constants/config';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  templateUrl: 'employee.component.html'
})
export class EmployeeComponent implements OnInit {
  @ViewChild('modalCreate') modalCreate: ModalDirective;
  employees: any;
  employee: Object;
  constructor(public userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.get()
      .then(res => {
        if (SUCCESS_STATUS == res['status']) {
          this.employees = res['data'];
        }
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }

  create = () => {
    this.userService.create(this.employee)
      .then(res => {
        if (res['status'] == SUCCESS_STATUS) {
          this.employees.push(res['data']);
          this.modalCreate.hide();
        } else {
          //   this.messageError = res['message'];
        }
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }
  openModalCreate = () => {
    this.modalCreate.show()
  }
}
