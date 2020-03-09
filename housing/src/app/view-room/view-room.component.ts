import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { AccountService } from '../Services/account.service';
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
import {ViewRoomService} from '../services/view-room.service';
//import 'rxjs/add/operator/toPromise';
import {HttpClientModule} from '@angular/common/http';



@Component({
  selector: 'dev-view-room',
  templateUrl: './view-room.component.html',
  styleUrls: ['./view-room.component.scss'],

})
export class ViewRoomComponent implements OnInit {

  constructor(public viewRoomService: ViewRoomService) { }

  xRoom: RoomType =
    {
      typeId: 1,
      roomType: "Apartment"
    };

    idSelector: number;
  XAmenity: Amenity = { id: '1', amenityType: "Desks", description: 'none' };
  YAmenity: Amenity = { id: '2', amenityType: "Shelves", description: 'none' };
  ZAmenity: Amenity = { id: '3', amenityType: "Furnishings", description: 'none' };
  AList: Amenity[] = [this.XAmenity, this.YAmenity, this.ZAmenity];


  yeet: Address =
    {
      addressID: '1',
      country: 'USA',
      streetAddress: "1001 S Center St",
      city: "Arlington",
      state: "Texas",
      zipcode: "64468"
    };

  stat: Status = {
    statusText: "It's aight"
  };

  prov: Provider = {
    providerId: 1,
    coordinatorId: "EOD",
    name: "Isaac",
    email: "yoooo@gmail.com",
    status: this.stat,
    accountCreatedAt: new Date(),
    accountExpiresAt: new Date()
  };

  comp: Complex = {

    complexId: '1',
    address: this.yeet,
    providerId: '1',
    complexName: "Liv+",
    contactNumber: "919-468-8796",
    complexAmenities: this.AList
  };



  gen: Gender = {
    genderId: 3,
    genderType: "M"
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


ngOnInit() {}
  
  getById(): void{
      this.room.roomId = null;
      //this.room.apiAddress = null;
      this.room.roomNumber = '';
      this.room.numberOfBeds = null;
      this.room.apiRoomType = null;
      //this.room.isOccupied = null;
      //this.room.apiAmenity = null;
      //this.room.startDate = null;
      //this.room.endDate = null;
      //this.room.apiComplex = null;
      //this.room.gender = null;

      this.viewRoomService.GetRoomById(this.idSelector)
        .toPromise().then(response => this.room = response);
    
  } 

}
