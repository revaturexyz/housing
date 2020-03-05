import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { AccountService } from './account.service';
import { OktaAuthService } from '@okta/okta-angular';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Identity} from 'src/interfaces/Identity';



@Injectable({
  providedIn: 'root'
})
export class IdentityService {
  apiUrl: string = `${environment.endpoints.tenant}` + 'api';

  httpOptions: any;

  constructor(private httpBus: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({})
   }
  }

  // Fetch tenant details
  GetTenantDetails(Email: string) : Observable<any> {
    const tenantUrl = `${this.apiUrl}` + '/tenant-account/' + `${Email}`;
    return this.httpBus.get<Identity>(tenantUrl, this.httpOptions);
  }

   // Fetch coordinator details
   /*
   GetCoordinatorDetails(Email: string) {
    const coordinatorUrl = `${this.apiUrl}` + '/coordinator-account/' + `${Email}`;
    return this.httpBus.get<coordinator>(coordinatorUrl, this.httpOptions);
  }*/

   // Fetch provider details
   /*
   GetProviderDetails(Email: string): Observable<any> {
    const providerUrl = `${this.apiUrl}` + '/provider-account/' + `${Email}`;
    return this.httpBus.get<provider>(providerUrl, this.httpOptions);
  }*/
}
