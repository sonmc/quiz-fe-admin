import { Component, OnInit } from '@angular/core';
import { SUCCESS_STATUS } from '../../containers/constants/config';
import { OkrOfYearService } from '../../containers/services/okrOfYear/okr-of-year.service';


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
    // this.objectiveQuarter = [
    //   {
    //     id: 1,
    //     quarter: "Quý I",
    //     description: [
    //       {
    //         id: 1,
    //         content: "Triển khai mô hình Inbound Sales"
    //       },
    //       {
    //         id: 2,
    //         content: "Tự động hoá vận hành"
    //       }
    //     ]
    //   }, {
    //     id: 1,
    //     quarter: "Quý II",
    //     description: [
    //       {
    //         id: 1,
    //         content: "Tài chính khoẻ mạnh"
    //       },
    //       {
    //         id: 2,
    //         content: "Khai trương Hà Nội 2 tháng 4/2020"
    //       }
    //     ]
    //   }, {
    //     id: 1,
    //     quarter: "Quý III",
    //     description: [
    //       {
    //         id: 1,
    //         content: "Khai trương Sài Gòn tháng 7/2020"
    //       },
    //       {
    //         id: 2,
    //         content: "Phát triển thương hiệu"
    //       }
    //     ]
    //   }, {
    //     id: 1,
    //     quarter: "Quý IV",
    //     description: [
    //       {
    //         id: 1,
    //         content: "Vận hành hiệu quả toàn hệ thống"
    //       }
    //     ]
    //   }
    // ]
  }

}
