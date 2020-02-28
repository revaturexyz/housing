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


@Component({
  selector: 'dev-view-room',
  templateUrl: './view-room.component.html',
  styleUrls: ['./view-room.component.scss'],

})
export class ViewRoomComponent implements OnInit {

  constructor() { }

  xRoom: RoomType =
    {
      typeId: 1,
      roomType: "Apartment"
    };

  XAmenity: Amenity = { amenityId: 1, amenity: "Desks", isSelected: true };
  YAmenity: Amenity = { amenityId: 2, amenity: "Shelves", isSelected: true };
  ZAmenity: Amenity = { amenityId: 3, amenity: "Furnishings", isSelected: true };
  AList: Amenity[] = [this.XAmenity, this.YAmenity, this.ZAmenity];


  yeet: Address =
    {
      addressId: 1,
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

    complexId: 1,
    apiAddress: this.yeet,
    apiProvider: this.prov,
    complexName: "Liv+",
    contactNumber: "919-468-8796",
    amenity: this.AList
  };



  gen: Gender = {
    genderId: 3,
    genderType: "M"
  };

  room: Room = {
    roomId: 1,
    apiAddress: this.yeet,
    roomNumber: "2134",
    numberOfBeds: 4,
    apiRoomType: this.xRoom,
    isOccupied: false,
    apiAmenity: this.AList,
    startDate: new Date(),
    endDate: new Date(),
    apiComplex: this.comp,
    gender: this.gen
  };

  ngOnInit() {

  }

}
