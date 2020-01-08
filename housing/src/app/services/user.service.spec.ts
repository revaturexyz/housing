import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { OktaAuthService, OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';
import { AccountService } from './account.service';

class BlankComponent {
}

describe('UserService', () => {

  const config = {
    clientId: '0oa2d72hlcH7CUgwf357',
    issuer: 'https://dev-837913.okta.com/oauth2/default',
    redirectUri: 'http://localhost:4200/implicit/callback', // port 9000 for docker compose, port 4200 for running with ng serve
    scopes: ['openid', 'profile', 'email', 'room'],
    responseType: ['code'],
    pkce: true,
  };


  beforeEach(async(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule.withRoutes([
      {
        path: '',
        component: BlankComponent
      }, {
        path: 'login-splash',
        component: BlankComponent
      }]),
      HttpClientTestingModule,
      OktaAuthModule],
    providers: [{
      provide: OKTA_CONFIG,
      useValue: config
    }]
    })
  ));

  it('should be created', inject([AccountService, OktaAuthService], (service: UserService) => {
    // const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  }));
});
