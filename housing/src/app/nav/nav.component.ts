import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
// import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'dev-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public role: string;
  public isAuthenticated: boolean;

  constructor(private router: Router, public auth: AuthService, public user: UserService) {
    user.Roles$.subscribe(res => this.role = res[0]);

    // get authentication state for immediate use
    // this.oktaAuth.isAuthenticated().then(result => {
    //   this.isAuthenticated = result;
    // });

    // subscribe to authentication state changes
    // this.oktaAuth.$authenticationState.subscribe(
    //   (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    // );
  }

  ngOnInit() { }
}
