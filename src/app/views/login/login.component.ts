import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShareService } from '../../containers/services/share/share.service';
import { UserService } from '../../containers/services/user/user.service';
import { AuthService } from '../../containers/services/auth/auth.service';
import { Router } from '@angular/router';
import { SUCCESS_STATUS } from '../../containers/constants/config';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  isError: boolean;
  isCalling: boolean;
  formLogin: FormGroup;
  messageError: string;
  isValidFormSubmitted: boolean;

  constructor(public fb: FormBuilder, public authService: AuthService, public router: Router,
    public shareService: ShareService, public userService: UserService) {
    this.isError = false;
    this.messageError = '';
    this.formLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]]
    });
  }
  login = () => {
    this.isValidFormSubmitted = false;
    if (this.formLogin.valid) {
      this.isCalling = true;
      this.isValidFormSubmitted = true;
      let value = this.formLogin.value;
      this.authService.login(value['username'], value['password'])
        .then(res => {
          this.isCalling = false;
          if (res['status'] == SUCCESS_STATUS) {
            this.isError = false;
            let employee = res['data'];
            this.authService.saveLocal(employee);
            this.shareService.updateUser(this.userService.convertUser(employee));
            this.router.navigate(['/my-okr']);
          } else {
            this.isError = true;
            this.messageError = res['message'];
            this.isCalling = false;
          }
        }).catch(e => {
          this.isCalling = false;
          window.alert('Connection Error !');
        })
    }
  }
}
