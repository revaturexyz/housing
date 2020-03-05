import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { AccountService } from '../Services/account.service';
import { OktaAuthService } from '@okta/okta-angular';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tenant } from 'src/interfaces/tenant';
import { RoomType } from 'src/interfaces/room-type';
import { Room2 } from 'src/interfaces/room';
import { RoomWithTenants } from 'src/interfaces/room-with-tenant';
import { Address } from 'src/interfaces/address';
import { state } from '@angular/animations';
import { Amenity } from 'src/interfaces/amenity';
import { Complex } from 'src/interfaces/complex';
import { Provider } from 'src/interfaces/account/provider';
import { Status } from 'src/interfaces/account/status';
import { Gender } from 'src/interfaces/gender';
import { Pipe, PipeTransform } from '@angular/core';
import {ViewRoomService} from '../services/view-room.service';
//import 'rxjs/add/operator/toPromise';
import {HttpClientModule} from '@angular/common/http';
import {TenantService} from '../services/tenant.service';
import {IdentityService} from '../services/identity.service';
import {Identity} from 'src/interfaces/Identity'


@Component({
  selector: 'dev-view-room',
  templateUrl: './view-room.component.html',
  styleUrls: ['./view-room.component.scss'],

})
export class ViewRoomComponent implements OnInit {

  constructor(public viewRoomService: ViewRoomService, public tenantService: TenantService, public identityService: IdentityService) { }

  idSelector: string;
  roomSelector: string;
  idHolder: string;

  room: Room2 = {
    roomId : '',
    roomNumber: '',
    complexId: null,
    numBeds: null,
    Amenities: null,
    apiRoomType: null,
    leaseStart: null,
    leaseEnd: null,
};

Ten: Identity = {
Name: null,
TenantId: null,
Email: null
};

ngOnInit() {this.getTenantInfo();}

getTenantInfo(): void{
  this.identityService.GetTenantDetails(this.Ten.Email)
  .toPromise().then(response => this.Ten = response);
  this.roomSelector = this.Ten.TenantId
}

 /* setTenantId(): void{
    this.tenant.id = this.idSelector;
    this.tenantService.GetTenantById(this.idSelector)
      .toPromise().then(response => this.tenant = response);

  }*/
  
  getById(): void{
      this.room.roomId = this.roomSelector;

      this.viewRoomService.GetRoomById(this.roomSelector)
        .toPromise().then(response => this.room = response);
        this.idHolder
  } 

}
