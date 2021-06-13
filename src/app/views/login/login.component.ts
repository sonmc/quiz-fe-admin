import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShareService } from '../../containers/services/share/share.service';
import { UserService } from '../../containers/services/user/user.service';
import { AuthService } from '../../containers/services/auth/auth.service';
import { Router } from '@angular/router';
import { SUCCESS_STATUS } from '../../containers/constants/config';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  formLogin: FormGroup;
  messageError: string;

  constructor(public fb: FormBuilder, public authService: AuthService, public router: Router,
    public shareService: ShareService, public userService: UserService) {

    this.messageError = '';
    this.formLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]]
    });
  }
  login = () => {
    if (this.formLogin.valid) {
      let value = this.formLogin.value;
      this.authService.login(value['username'], value['password'])
        .then(res => {
          debugger
          if (res['status'] == SUCCESS_STATUS) {
            let user = res['data'];
            this.authService.saveLocal(user);
            this.router.navigate(['/user']);
          } else {
            this.messageError = res['message'];
          }
        }).catch(e => {
          window.alert('Connection Error !');
        })
    }else {
      this.messageError = "Account or password invalid!";
    }
    this.router.navigate(['/user']);
  }
}
