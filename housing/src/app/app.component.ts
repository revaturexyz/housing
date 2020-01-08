import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';

@Component({
  selector: 'dev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'housing';

  constructor(private auth: AuthService, public appInsights: ApplicationInsights) { }

  ngOnInit() {
    this.auth.localAuthSetup();
    this.auth.handleAuthCallback();

    this.appInsights.loadAppInsights();

    this.appInsights.trackPageView({name: 'Home Page Tracker'});

    this.appInsights.flush();
  }
}
