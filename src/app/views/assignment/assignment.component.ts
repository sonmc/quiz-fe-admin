import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { SUCCESS_STATUS } from '../../containers/constants/config';
import { AssignmentService } from '../../containers/services/assignment/assignment.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  @ViewChild('modalCreate') modalCreate: ModalDirective;
  assignment : any = {
    name:"",
    description:""
  }
  assignments: any;
  constructor(private assignmentService: AssignmentService) { }

  ngOnInit(): void {
    this.assignmentService.get()
    .then(res => {
      if (SUCCESS_STATUS == res['status']) {
        this.assignments = res['data'];
      }
    }).catch(e => {
      window.alert('Connection Error !');
    })
  }
  openModalCreate = () => { 
    this.modalCreate.show();
  }
}
