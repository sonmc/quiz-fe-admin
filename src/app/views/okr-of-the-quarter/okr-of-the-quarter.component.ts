import { Component, OnInit } from '@angular/core';
import { SUCCESS_STATUS } from '../../containers/constants/config';
import { OkrQuarterService } from '../../containers/services/okrOfQuarter/okr-of-quarter.service';

@Component({
  templateUrl: 'okr-of-the-quarter.component.html'
})
export class OkrOfQuarterComponent implements OnInit {

  datas: Object;
  constructor(public service: OkrQuarterService) {
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
}
