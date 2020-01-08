import { Component, OnInit } from '@angular/core';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';

@Component({
  selector: 'dev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'housing';

  constructor(public appInsights: ApplicationInsights) { }

  ngOnInit() {

    this.appInsights.loadAppInsights();

    this.appInsights.trackPageView({name: 'Home Page Tracker'});

    this.appInsights.flush();
  }
}
