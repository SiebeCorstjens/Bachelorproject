import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _authService: AuthService, private _router: Router) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.startsWith(environment.apiRoot)) {
      var accessToken = this._authService.authorizationAccessToken;
      const headers = req.headers.set('Authorization', `Bearer ${accessToken}`);
      const authReq = req.clone({ headers });
      return next.handle(authReq)
    } else {
      return next.handle(req);
    }
  }
}
