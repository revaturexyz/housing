import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { OktaAuthService } from '@okta/okta-angular';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tenant } from 'src/interfaces/tenant';
import { RoomType } from 'src/interfaces/room-type';
import { Room } from 'src/interfaces/room';
import { RoomWithTenants } from 'src/interfaces/room-with-tenant';
import { Address } from 'src/interfaces/address';
import { state } from '@angular/animations';
import { Amenity } from 'src/interfaces/amenity';
import { Complex } from 'src/interfaces/complex';
import { Provider } from 'src/interfaces/account/provider';
import { Status } from 'src/interfaces/account/status';
import { Gender } from 'src/interfaces/gender';
import { Pipe, PipeTransform } from '@angular/core';
// import 'rxjs/add/operator/toPromise';
import {HttpClientModule} from '@angular/common/http';
import { LodgingService } from '../services/lodging.service';
import { TenantService } from '../services/tenant.service';



@Component({
  selector: 'dev-view-room',
  templateUrl: './view-room.component.html',
  styleUrls: ['./view-room.component.scss'],

})
export class ViewRoomComponent implements OnInit {

  constructor(private lodgingService: LodgingService, private tenantService: TenantService) { }

  xRoom: RoomType =
    {
      typeId: 1,
      roomType: 'Apartment'
    };

    tenantid: string = null;
    // Tennant id should be available at runtime. Okta should have this value
    // stored in local, cookies, or session storage

    currentTenant: Tenant = null;
    // Information for currently logged in tenant
    // this page primarily needs roomid attached to the tenant

    currentRoom: Room = null;
    // Contains the room information to be displayed on the page.

    idSelector: number;
  XAmenity: Amenity = { id: '1', amenityType: 'Desks', description: 'none' };
  YAmenity: Amenity = { id: '2', amenityType: 'Shelves', description: 'none' };
  ZAmenity: Amenity = { id: '3', amenityType: 'Furnishings', description: 'none' };
  AList: Amenity[] = [this.XAmenity, this.YAmenity, this.ZAmenity];


  yeet: Address =
    {
      addressID: '1',
      country: 'USA',
      street: '1001 S Center St',
      city: 'Arlington',
      state: 'Texas',
      zipCode: '64468'
    };

  stat: Status = {
    statusText: 'It\'s aight'
  };

  prov: Provider = {
    providerId: 1,
    coordinatorId: 'EOD',
    name: 'Isaac',
    email: 'yoooo@gmail.com',
    status: this.stat,
    accountCreatedAt: new Date(),
    accountExpiresAt: new Date()
  };

  comp: Complex = {

    complexId: '1',
    address: this.yeet,
    providerId: '1',
    complexName: 'Liv+',
    contactNumber: '919-468-8796',
    complexAmenities: this.AList
  };



  gen: Gender = {
    genderId: 3,
    genderType: 'M'
  };

  room: Room = {
    roomId : null,
    roomNumber: '',
    numberOfBeds: null,
    numberOfOccupants: null,
    apiRoomType: null,
    amenities: null,
    leaseStart: null,
    leaseEnd: null,
    complexId: null,
    gender: null
};


ngOnInit() {

  this.tenantid = sessionStorage.getItem('guid');
  console.log('hello', this.tenantid);
  // this.getTenantRoom(this.currentTenant.roomId);

  this.tenantService.GetTenantById(this.tenantid).subscribe(data => {
    this.currentTenant = data;
    console.log(this.currentTenant);
    console.log('roomId', this.currentTenant.roomId);


    this.lodgingService.getRoomById(this.currentTenant.roomId).subscribe(dataT => {
      this.currentRoom = dataT;
      console.log(this.currentRoom);
    });
  });
}
}
