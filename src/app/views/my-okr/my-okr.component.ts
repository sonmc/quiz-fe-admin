import { Component, OnInit } from '@angular/core';
import { MyOkrService } from '../../containers/services/myOkr/my-okr.service';
import { SUCCESS_STATUS } from '../../containers/constants/config';
import { AuthService } from '../../containers/services/auth/auth.service';

@Component({
  templateUrl: 'my-okr.component.html'
})
export class MyOkrComponent implements OnInit {

  constructor(public myOkrService: MyOkrService, public authService: AuthService) {
  }

  ngOnInit(): void {
    let user = this.authService.getLocal();
    var myOkr = {
      Quarter: null,
      EmployeeId: user.employeeId,
      BranchId: null,
      DepartmentId: null
    }
    this.myOkrService.get(myOkr)
      .then(res => {
        if (SUCCESS_STATUS == res['status']) {
          let datas = res['data'];
        }

      }).catch(e => {
        window.alert('Connection Error !');
      })
  }

}
