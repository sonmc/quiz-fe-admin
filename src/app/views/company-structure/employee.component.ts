import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { UserService } from '../../containers/services/user/user.service';
import { SUCCESS_STATUS } from '../../containers/constants/config';

@Component({
  templateUrl: 'employee.component.html'
})
export class EmployeeComponent implements OnInit {

  employees: any;
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
}
