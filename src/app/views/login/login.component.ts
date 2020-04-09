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
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]]
    });
  }
  login = () => {
    this.isValidFormSubmitted = false;
    if (this.formLogin.valid) {
      this.isCalling = true;
      this.isValidFormSubmitted = true;
      let value = this.formLogin.value;
      this.authService.login(value['email'], value['password'])
        .then(res => {
          this.isCalling = false;
          if (res['status'] == SUCCESS_STATUS) {
            this.isError = false;
            this.router.navigate(['/']);
          } else {
            this.isError = true;
            this.messageError = res['message'];
          }
        }).catch(e => {
          this.isCalling = false;
          window.alert('Connection Error !');
        })
    }
  }
}
