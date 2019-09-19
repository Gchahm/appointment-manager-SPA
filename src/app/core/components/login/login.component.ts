import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../../shared/services/auth.service';
import {Subscription} from 'rxjs';
import {ToastService} from '../../../shared/services/toast.service';
import {LoginModel} from '../../../shared/models/LoginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  private loginSubscription: Subscription;
  user: LoginModel = {email: '', password: ''};

  constructor(private authService: AuthService,
              private toastService: ToastService) { }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }

  login() {
    this.loginSubscription = this.authService.login(this.user).subscribe(next => {
      this.toastService.success('logged in');
    }, error1 => {
      this.toastService.error(error1);
    });
  }

  FBLogin() {
    this.authService.FBLogin();
  }
}
