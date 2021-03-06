import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import FacebookEventCallback = facebook.FacebookEventCallback;

@Injectable({
  providedIn: 'root'
})
export class FacebookAuthService {

  private initialized: boolean;

  init() {
    if (!this.initialized) {
      this.facebookInit();
      this.createFBButton();
    }
  }

  getToken(): Observable<string> {
    return from(this.getFbToken());
  }

  logout() {
    FB.logout();
  }

  // login(): Observable<string> {
  //   return from(this.loginFb());
  // }

  // private loginFb(): Promise<string> {
  //   return new Promise((resolve, reject) => {
  //     FB.login((response) => {
  //       if (response.status === 'connected') {
  //         const accessToken = response.authResponse.accessToken;
  //         resolve(accessToken);
  //       } else {
  //         reject(response.status);
  //       }
  //     }, {scope: 'email'});
  //   });
  // }

  onLogin(callback: FacebookEventCallback<'auth.login'>) {
    this.fbEnsureInit( () => {
      FB.Event.subscribe('auth.authResponseChange', callback);
    });
  }

  unsubscribeLogin(callback: () => void) {
    this.fbEnsureInit(() => {
      FB.Event.unsubscribe('auth.authResponseChange', callback);
    });
  }

  createButton() {
    this.fbEnsureInit(() => {
      // Ensures that the button doesn't initialized twice (this happens when the login page is the first opened page)
      if (!document.getElementById('facebook')) {
        FB.XFBML.parse();
      }
    });
  }

  private fbEnsureInit(callback: () => void) {
    if (!this.initialized) {
      setTimeout(() => this.fbEnsureInit(callback), 50);
    } else {
      if (callback) {
        callback();
      }
    }
  }

  private getFbToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.fbEnsureInit(() => {
        FB.getLoginStatus((response) => {
          if (response.status === 'connected') {
            const accessToken = response.authResponse.accessToken;
            resolve(accessToken);
          }
          reject(response.status);
        });
      });
    });
  }

  private facebookInit() {
    // @ts-ignore
    window.fbAsyncInit = () => {
      FB.init({
        appId: environment.facebookAppId,
        cookie: true,
        xfbml: true,
        version: 'v9.0'
      });
      FB.AppEvents.logPageView();
      this.initialized = true;
    };
  }

  private createFBButton() {
    const s = 'script';
    const id = 'facebook-jssdk';
    // tslint:disable-next-line:prefer-const one-variable-per-declaration
    let js, fjs = document.getElementsByTagName(s)[0];
    if (document.getElementById(id)) {
      return;
    }
    js = document.createElement(s);
    js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js';
    fjs.parentNode.insertBefore(js, fjs);
  }
}


