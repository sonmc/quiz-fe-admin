import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'okr-of-the-year.component.html'
})
export class OkrOfYearComponent implements OnInit {
  dods: any;
  objective: string;
  description: string;
  objectiveQuarter: any;
  mainMission: any;
  ngOnInit() {
    this.objective = "Tăng Trưởng";
    this.description = "Xét theo quy luật thông thường của một Startup, CodeGym đã vượt qua giai đoạn vật lộn để sống sót và thành hình. Năm 2020, CodeGym hội đủ các điều kiện cần thiết để có thể bắt đầu chuyển sang giai đoạn tăng trưởng. Mục tiêu của năm sẽ là tăng trưởng mạnh ở tất cả các chỉ số quan trọng nhất như doanh số, lợi nhuận, học viên đồng thời, học viên tốt nghiệp, thị trường. Tăng trưởng của năm 2020 sẽ rất vất vả do vẫn cần đổ vào rất nhiều 'sức cơm', do đó, chúng ta cũng cần tiếp tục hoàn thiện mô hình, hoàn thiện giải pháp để chuẩn bị cho bước tăng trưởng mạnh mẽ mà cần ít 'sức cơm' trong năm 2021.";
    this.dods = [
      {
        id: 1,
        description: "Gấp 3 doanh thu so với 20191"
      }, {
        id: 2,
        description: "Gấp 3 học viên đồng thời (750)"
      }, {
        id: 3,
        description: "Phát triển thương hiệu lên tầm quốc gia"
      }, {
        id: 4,
        description: "Mở 2 cơ sở mới (Tăng công suất lên 1000 CS)"
      }
    ];
    this.mainMission = [
      {
        id: 1,
        department: "Vân Hành",
        description: "Gấp 3 doanh thu so với 20191"
      }, {
        id: 2,
        department: "Kinh Doanh",
        description: "Gấp 3 học viên đồng thời (750)"
      }, {
        id: 3,
        department: "Marketing",
        description: "Phát triển thương hiệu lên tầm quốc gia"
      }, {
        id: 4,
        department: "RnD",
        description: "Mở 2 cơ sở mới (Tăng công suất lên 1000 CS)"
      }
    ]
    this.objectiveQuarter = [
      {
        id: 1,
        quarter: "Quý I",
        description: [
          {
            id: 1,
            content: "Triển khai mô hình Inbound Sales"
          },
          {
            id: 2,
            content: "Tự động hoá vận hành"
          }
        ]
      }, {
        id: 1,
        quarter: "Quý II",
        description: [
          {
            id: 1,
            content: "Tài chính khoẻ mạnh"
          },
          {
            id: 2,
            content: "Khai trương Hà Nội 2 tháng 4/2020"
          }
        ]
      }, {
        id: 1,
        quarter: "Quý III",
        description: [
          {
            id: 1,
            content: "Khai trương Sài Gòn tháng 7/2020"
          },
          {
            id: 2,
            content: "Phát triển thương hiệu"
          }
        ]
      }, {
        id: 1,
        quarter: "Quý IV",
        description: [
          {
            id: 1,
            content: "Vận hành hiệu quả toàn hệ thống"
          }
        ]
      }
    ]
  }

}
