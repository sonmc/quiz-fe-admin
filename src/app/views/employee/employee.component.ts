import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../containers/services/user/user.service';
import { SUCCESS_STATUS } from '../../containers/constants/config';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: 'employee.component.html'
})
export class EmployeeComponent implements OnInit {
  @ViewChild('modalCreate') modalCreate: ModalDirective;
  employees: any;
  employee: Object;
  teamId: Number;
  branchId: Number;
  constructor(public userService: UserService, private actRoute: ActivatedRoute, public router: Router) {
    this.teamId = this.actRoute.snapshot.params.teamId ? parseInt(this.actRoute.snapshot.params.teamId) : 0;
    this.branchId = 1;
  }

  ngOnInit(): void {
    this.userService.get(this.teamId, this.branchId)
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
  goOList = (empId) => {
    this.router.navigate(['/objective', empId]);
  }
}
