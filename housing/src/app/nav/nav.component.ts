import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { OktaAuthService, UserClaims } from '@okta/okta-angular';

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

  async ngOnInit() 
  { 
    //this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    if (this.oktaAuth.isAuthenticated()) 
    {
      if(localStorage.justOnce == "false")
      {
        localStorage.setItem("justOnce", "true");
        window.location.reload();
      }
      const userClaims = await this.oktaAuth.getUser();
      this.role = userClaims.groups[1];
      localStorage.setItem('role', this.role);

    }
    
  }
}
