
import { Component, OnInit } from '@angular/core';
import { SUCCESS_STATUS } from '../../containers/constants/config';
import { OkrService } from '../../containers/services/okr/okr.service';
import { ToastrService } from 'ngx-toastr';
var $: any;

@Component({
  templateUrl: 'okr-of-the-year.component.html',
})
export class OkrOfYearComponent implements OnInit {
  data: Object = {};
  objective: String;
  description: String;
  desEdited: Boolean = false;
  objEdited: Boolean = false;
  dateNow = new Date();
  year: Number;
  branchId: Number = 1;
  constructor(public service: OkrService, public toastr: ToastrService) {
    this.year = this.dateNow.getFullYear();
  }
  ngOnInit() {

    this.service.getOkrYear(this.branchId)
      .then(res => {
        if (SUCCESS_STATUS == res['status']) {
          this.data = res['data'];
          this.objective = this.data['objective'];
          this.description = this.data['description'];
        }
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }
  editDes = () => {
    this.desEdited = true;
  }
  editObj = () => {
    this.objEdited = true;
  }
  hideEditerDes = () => {
    if (!this.data['description']) {
      this.data['description'] = "";
    }
    if (this.description.trim() != this.data['description'].trim()) {
      this.data['description'] = this.description;
      this.saveDes(this.data);
    }
    this.desEdited = false;
  }
  hideEditerObj = () => {
    if (!this.data['objective']) {
      this.data['objective'] = "";
    }
    if (this.objective.trim() != this.data['objective'].trim()) {
      this.data['objective'] = this.objective;
      this.saveDes(this.data);
    }
    this.objEdited = false;
  }
  saveDes = (data: any) => {
    data.branchId = this.branchId;
    debugger
    this.service.update(data)
      .then(res => {
        if (SUCCESS_STATUS == res['status']) {
          this.toastr.success('Success', '');
          this.data = res['data'];
        }
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }

}
