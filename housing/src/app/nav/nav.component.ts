import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { OktaAuthService } from '@okta/okta-angular';
import { AccountService } from '../../app/services/account.service';

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
  public guid: string;

  constructor(private router: Router, public user: UserService, public oktaAuth: OktaAuthService, public AccService: AccountService) {
    // get authentication state for immediate use
    this.oktaAuth.isAuthenticated().then(result => {
      this.isAuthenticated = result;
    });

    // subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
  }

  /*
  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    if (this.oktaAuth.isAuthenticated()) {

      const userClaims = await this.oktaAuth.getUser();
      this.role = userClaims.groups[1];
      sessionStorage.setItem('role', this.role);

      this.AccService.getId$().subscribe(val => {
        this.guid = val;
        sessionStorage.setItem('guid', this.guid);
      });

    }

   }
   */

   logoutHandler() {
     sessionStorage.removeItem('guid');
     this.oktaAuth.logout('/');
   }

   ngOnInit() {
    this.handleOkta();
   }

   async handleOkta() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    if (this.oktaAuth.isAuthenticated()) {

      setTimeout( () => {
        const userClaims = this.oktaAuth.getUser();
        userClaims.then(val => {
          console.log('doggie', val.groups[1]);
          this.role = val.groups[1];
          sessionStorage.setItem('role', this.role);
          this.AccService.getId$().subscribe(value => {
            this.guid = value;
            sessionStorage.setItem('guid', this.guid);
          });
        });
      }, 1000);
    }
   }
}
