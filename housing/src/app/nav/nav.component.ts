import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'dev-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public role: string;
  public isAuthenticated: boolean;
  public token: string;
  public decodetoken: string;
  public isProvider: boolean;

  constructor(private router: Router, public auth: AuthService, public user: UserService, public oktaAuth: OktaAuthService) {
    // get authentication state for immediate use
    this.oktaAuth.isAuthenticated().then(result => {
      this.isAuthenticated = result;
    });

    // subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );

    user.Roles$.subscribe(res => this.role = res[1]); // index 0 is 'Everyone', index 1 is the actual role.
  }

  public async getAccessToken() {
    this.token = await this.oktaAuth.getAccessToken();
  }

  ngOnInit() { }
}
