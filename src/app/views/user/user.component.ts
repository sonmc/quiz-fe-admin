import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { SUCCESS_STATUS } from '../../containers/constants/config';
import { UserService } from '../../containers/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @ViewChild('modalCreate') modalCreate: ModalDirective;
  users: any;  
  user : any = {
    userName: "",
    email:"",
    gender:"",
    phoneNumber:"",
    address:""
  }
  constructor(public userService: UserService, 
    public router: Router,
    private toastr: ToastrService
  ) { 
  }

  ngOnInit(): void {
    this.userService.get()
      .then(res => {
        if (SUCCESS_STATUS == res['status']) {
          this.users = res['data'];
        }
      }).catch(e => {
        window.alert('Connection Error !');
      })
  } 
  openModalCreate = () => { 
    this.modalCreate.show();
  }
 
}
