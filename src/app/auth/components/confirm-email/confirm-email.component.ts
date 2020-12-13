import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '@api/clients/auth.service';
import {ToastService} from '@shared/services/toast.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.scss']
})
export class ConfirmEmailComponent implements OnInit {

  confirmed = false;
  failure = false;
  isLoggedIn$: Observable<boolean>;

  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private toast: ToastService) {
  }

  ngOnInit(): void {
    const key = this.route.snapshot.paramMap.get('emailKey');
    if (key) {
      this.confirmEmail(key);
    }
  }

  confirmEmail(key) {
    this.authService.verifyEmail(key)
      .toPromise()
      .then(res => {
        this.confirmed = true;
        this.toast.success('email confirmed');
      })
      .catch(error => {
        this.failure = true;
        this.toast.error('couldn\'t confirm the email address');
      });
  }

  resendEmail() {
    this.authService.resendConfirmationEmail()
      .toPromise()
      .then(res => {
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
      });
  }
}