import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Provider } from 'src/interfaces/account/provider';
import { Complex } from 'src/interfaces/complex';
import { UserService } from '../services/user.service';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'dev-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  locationList: object;
  roomList: object;
  provider: Provider;
  complexes: Complex[];
  public role: string;
  public isAuthenticated: boolean;

  constructor(private router: Router, public user: UserService, public oktaAuth: OktaAuthService) {
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
  ngOnInit() {
  }
}
