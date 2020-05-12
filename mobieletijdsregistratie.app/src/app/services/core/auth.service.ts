import { Injectable } from '@angular/core';
import { UserManager, User, UserManagerSettings, WebStorageStateStore } from 'oidc-client';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { RegistrationService } from '../others/registration.service';
import { ErrorService } from '../others/error.service';

@Injectable()
export class AuthService {

  private _authStatusSource = new BehaviorSubject<boolean>(false);
  authStatus$ = this._authStatusSource.asObservable();

  private manager = new UserManager(getClientSettings());
  private user: User | null;

  constructor(private registrationService: RegistrationService, private errorService: ErrorService) {
    this.manager.getUser().then(user => {
      if (user != null && user.profile["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] == "Person") {
        var storedEmployer = JSON.parse(localStorage.getItem('EmployerObject'));

        if (storedEmployer == null) {
          this.manager.removeUser();
          this.errorService.authErrorSource.next("Aanmelden mislukt.")
          localStorage.clear();
          return;
        }

        this.replaceUserWithEmployer(user, storedEmployer);

        var personRegistration = localStorage.getItem('registrationValues').split(",");
        this.registrationService.performRegistration(personRegistration[0], Number.parseInt(personRegistration[1]));

        localStorage.clear();
        return;
      }

      this.user = user;
      this._authStatusSource.next(this.isAuthenticated());
    });

    this.manager.events.addUserLoaded(() => {
      this.manager.getUser().then(user => {
        this.user = user;
        this._authStatusSource.next(this.isAuthenticated());
      });
    });
  }

  loginEmployer() {
    return this.manager.signinRedirect();
  }

  loginPerson() {
    localStorage.setItem('EmployerObject', JSON.stringify(this.user));
    return this.manager.signinRedirect();
  }

  signout() {
    this.manager.signoutRedirect();
  }

  isAuthenticated(): boolean {
    return this.user != null && !this.user.expired;
  }

  get authorizationAccessToken(): string {
    return `${this.user.access_token}`;
  }

  get UserFirstName(): string {
    return this.user != null ? this.user.profile.first_name : '';
  }

  get UserId(): number {
    return this.user != null ? this.user.profile.sub : 0;
  }

  replaceUserWithEmployer(user: User, storedEmployer: User) {
    user.access_token = storedEmployer.access_token;
    user.expires_at = storedEmployer.expires_at;
    user.id_token = storedEmployer.id_token;
    user.profile = storedEmployer.profile;
    user.scope = storedEmployer.scope;
    user.session_state = storedEmployer.session_state;

    this.user = user;
    this.manager.storeUser(user);
    this._authStatusSource.next(this.isAuthenticated());
  }
}

export function getClientSettings(): UserManagerSettings {
  return {
    authority: environment.identityAuthority,
    client_id: 'festitimer-client',
    redirect_uri: `${environment.clientRoot}assets/oidc-login-redirect.html`,
    post_logout_redirect_uri: `${environment.clientRoot}?postLogout=true`,
    response_type: "id_token token",
    scope: "openid festitimer-api profile",
    filterProtocolClaims: true,
    userStore: new WebStorageStateStore({ store: window.sessionStorage }),
    silent_redirect_uri: `${environment.clientRoot}silent-refresh.html`,
    loadUserInfo: true,
    prompt: 'login'
  };
}
