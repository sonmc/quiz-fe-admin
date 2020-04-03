import { Injectable } from '@angular/core';

import { User } from '../../models/user';

@Injectable()

export class UserService {

  convertUser = (info: Object): User => {
    let user = new User();
    return user;
  }
}
