import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor(private injector: Injector) { }
    handleError(error: Error) {
        const appInsights = this.injector.get(ApplicationInsights);
        appInsights.trackException({ exception: error });
    }
}
