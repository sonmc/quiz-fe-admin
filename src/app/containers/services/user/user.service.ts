import { Injectable } from '@angular/core';

import { Employee } from '../../models/user/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  convertUser = (info: Object): Employee => {
    let user = new Employee();
    user.employeeId = info['employeeId'];
    user.username = info['userName'];
    user.token = info['token'];
    return user;
  }  
}
