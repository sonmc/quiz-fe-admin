import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { SUCCESS_STATUS } from '../../containers/constants/config';
import { GroupService } from '../../containers/services/group/group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  @ViewChild('modalCreate') modalCreate: ModalDirective;
 
  groups: any;
  group: any = {
    name: "",
    description: ""
  }
  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
    this.groupService.get()
      .then(res => {
        if (SUCCESS_STATUS == res['status']) {
          this.groups = res['data'];
        }
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }
  openModalCreate = () => {
    this.modalCreate.show();
  }

}
