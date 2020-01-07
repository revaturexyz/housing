// Auth0 Quickstart code taken from https://auth0.com/docs/quickstart/spa/angular2

// Used to add tokens into headers of outgoing requests.

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable, throwError, from, } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';
import { OktaAuthService } from '@okta/okta-angular';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  // constructor(private auth: AuthService) { }

  // intercept(
  //   req: HttpRequest<any>,
  //   next: HttpHandler
  // ): Observable<HttpEvent<any>> {
  //   return this.auth.getTokenSilently$().pipe(
  //     mergeMap(token => {
  //       const tokenReq = req.clone({
  //         setHeaders: { Authorization: `Bearer ${token}` }
  //       });
  //       return next.handle(tokenReq);
  //     }),
  //     catchError(err => throwError(err))
  //   );
  // }

  constructor(private oktaAuth: OktaAuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.isAuthenticated().pipe(
      mergeMap( (isAuthenticated) => {
        if (!isAuthenticated) {
          return next.handle(request);
        }
        return this.getAccessToken().pipe(
          mergeMap((accessToken) => {
            request = request.clone({
              setHeaders: {
                Authorization: `Bearer ${accessToken}`
              }
            });
            return next.handle(request);
          }));
    }));
  }

  private isAuthenticated(): Observable<boolean> {
    return from(this.oktaAuth.isAuthenticated());
  }

  private getAccessToken(): Observable<string> {
    return from(this.oktaAuth.getAccessToken());
  }

}
