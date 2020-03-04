import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { OktaAuthService } from '@okta/okta-angular';
import { TenantSearcherService } from '../services/tenant-searcher.service';

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

  constructor(private router: Router, public user: UserService, public oktaAuth: OktaAuthService, public service: TenantSearcherService) {
    // get authentication state for immediate use
    this.oktaAuth.isAuthenticated().then(result => {
      this.isAuthenticated = result;
    });

    // subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
  }

  test() {
    this.service.getTestMessage().then(res =>
    {
      console.log("aa");
      //console.log(res);
    })
  }

   async ngOnInit() {    
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    if (this.oktaAuth.isAuthenticated()) {
      
      const userClaims = await this.oktaAuth.getUser();
      this.role = userClaims.Roles[1];
      console.log(this.role);
    }

   }
}
