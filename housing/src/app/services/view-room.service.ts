import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { AccountService } from './account.service';
import { OktaAuthService } from '@okta/okta-angular';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tenant } from 'src/interfaces/tenant';
import { RoomType } from 'src/interfaces/room-type';
import { Room } from 'src/interfaces/room';
import { RoomWithTenants } from 'src/interfaces/room-with-tenant';


@Injectable({
  providedIn: 'root'
})
export class ViewRoomService {

  apiUrl: string = `${environment.endpoints.tenant}` + 'api';

  httpOptions: any;

  constructor(
    private httpBus: HttpClient
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({})
    };
  }

  // Get room by id from api
  GetRoomById(roomId: number): Observable<any> {
    const roomUrl = `${this.apiUrl}` + 'rooms/' + `${roomId}`;
    return this.httpBus.get<Room>(roomUrl, this.httpOptions);
  }

}
