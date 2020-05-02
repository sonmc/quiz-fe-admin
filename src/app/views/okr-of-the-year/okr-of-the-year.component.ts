
import { Component, OnInit } from '@angular/core';
import { SUCCESS_STATUS } from '../../containers/constants/config';
import { OkrOfYearService } from '../../containers/services/okrOfYear/okr-of-year.service';
var $: any;

@Component({
  templateUrl: 'okr-of-the-year.component.html',
})
export class OkrOfYearComponent implements OnInit {
  data: Object = {
    objective: "",
    description: "",
    departments: [],
    okrOfQuarters: []
  };
  objective: String;
  description: String;
  desEdited: Boolean = false;
  objEdited: Boolean = false;
  dateNow = new Date();
  year: Number;
  constructor(public service: OkrOfYearService) {
    this.year = this.dateNow.getFullYear();
  }
  ngOnInit() {
    let branchId = 1;
    this.service.get(branchId)
      .then(res => {
        if (SUCCESS_STATUS == res['status']) {
          this.data = res['data'];
          this.objective = this.data['objective'];
          this.description = this.data['description'];
        }
      }).catch(e => {
        window.alert('Connection Error !');
      })
    // this.dods = [
    //   {
    //     id: 1,
    //     description: "Gấp 3 doanh thu so với 20191"
    //   }, {
    //     id: 2,
    //     description: "Gấp 3 học viên đồng thời (750)"
    //   }, {
    //     id: 3,
    //     description: "Phát triển thương hiệu lên tầm quốc gia"
    //   }, {
    //     id: 4,
    //     description: "Mở 2 cơ sở mới (Tăng công suất lên 1000 CS)"
    //   }
    // ];
    // this.mainMission = [
    //   {
    //     id: 1,
    //     department: "Vân Hành",
    //     description: "Gấp 3 doanh thu so với 20191"
    //   }, {
    //     id: 2,
    //     department: "Kinh Doanh",
    //     description: "Gấp 3 học viên đồng thời (750)"
    //   }, {
    //     id: 3,
    //     department: "Marketing",
    //     description: "Phát triển thương hiệu lên tầm quốc gia"
    //   }, {
    //     id: 4,
    //     department: "RnD",
    //     description: "Mở 2 cơ sở mới (Tăng công suất lên 1000 CS)"
    //   }
    // ] 
  }
  editDes = () => {
    this.desEdited = true;
  }
  editObj = () => {
    this.objEdited = true;
  }
  hideEditerDes = () => {
    if (this.description.trim() != this.data['description'].trim()) {
      this.data['description'] = this.description;
      this.saveDes(this.data);
    }
    this.desEdited = false;
  }
  hideEditerObj = () => {
    if (this.objective.trim() != this.data['objective'].trim()) {
      this.data['objective'] = this.objective;
      this.saveDes(this.data);
    }
    this.objEdited = false;
  }
  saveDes = (data: any) => {
    this.service.update(data)
      .then(res => {
        if (SUCCESS_STATUS == res['status']) {
          this.data = res['data'];
        }
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }

}
