import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { InterceptorService } from './interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { of } from 'rxjs';
import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';

class BlankComponent {
}

describe('InterceptorService', () => {
  const config = {
    clientId: '0oa2d72hlcH7CUgwf357',
    issuer: 'https://dev-837913.okta.com/oauth2/default',
    redirectUri: 'http://localhost:4200/implicit/callback', // port 9000 for docker compose, port 4200 for running with ng serve
    scopes: ['openid', 'profile', 'email', 'room'],
    responseType: ['code'],
    pkce: true,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: '',
            component: BlankComponent
          }, {
            path: 'login-splash',
            component: BlankComponent
        }]),
        HttpClientTestingModule,
        OktaAuthModule],
      providers: [
        {
          provide: OKTA_CONFIG,
          useValue: config
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: InterceptorService,
          multi: true,
        },
      ]
    });
  });

  it('should be created', () => {
    const service: InterceptorService = TestBed.get(InterceptorService);
    expect(service).toBeTruthy();
  });

  it('adds Authorization header', inject(
    [HttpTestingController, HttpClient],
    (httpMock: HttpTestingController, httpClient: HttpClient) => {

      httpClient.get('https://google.com').subscribe( resp => expect(resp).toBeTruthy());
      const req = httpMock.expectNone(r => r.headers.has('Authorization'));

      httpMock.verify();
    }));

  afterEach(inject([HttpTestingController], (mock: HttpTestingController) => {
    mock.verify();
  }));

});
