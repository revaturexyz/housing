import { Component, OnInit } from '@angular/core';
import { TenantService } from 'src/app/services/tenant.service';
// import { UserService } from 'src/app/services/user.service';
import { Tenant } from 'src/interfaces/tenant';
import { MatChipInputEvent } from '@angular/material';
import { MatStepperModule } from '@angular/material';
import {LodgingService} from '../services/lodging.service';
import {Room} from 'src/interfaces/room';

@Component({
  selector: 'dev-tenant-profile',
  templateUrl: './tenant-profile.component.html',
  styleUrls: ['./tenant-profile.component.scss']
})

export class TenantProfileComponent implements OnInit {

  tenantInfo: Tenant = null;
  testTenant: Tenant;

  constructor(
    public tenantService: TenantService,
    public lodgingService: LodgingService
    // private user: UserService
  ) {
    // empty these when user account prepared and userservice working
    this.testTenant = {
      id: 'g28a-2917-1983-298f-98c1-a19a',
      email: 'test@email.com',
      gender: 'Alien',
      firstName: 'Bob',
      lastName: 'Badoo',
      addressId: '1',
      roomId: '1',
      carId: 1,
      batchId: 1,
      apiAddress:
      {
        Id: '1',
        street: '123 Street Name',
        city: 'City Name',
        state: 'ST',
        zipCode: '12345',
        country: 'USA'
      },
      car:
      {
        id: 1,
        licensePlate: '9S63GB5',
        make: 'Honda',
        model: 'Civic',
        color: 'Black',
        year: '3030',
        state: 'ST'
      },
      apiBatch:
      {
        id: 1,
        batchCurriculum: '.NET',
        startDate: new Date(2020, 1, 3),
        endDate: new Date(2120, 2, 3),
        trainingCenter: 'f55db185-205e-4669-baf3-1872e87b9bcc'
      },
      trainingCenter: 'f55db185-205e-4669-baf3-1872e87b9bcc'
    };
  }

  tenantid: string = null;
  // Tennant id should be available at runtime. Okta should have this value
  // stored in local, cookies, or session storage



  currentRoom: Room = null;
  // Contains the room information to be displayed on the page.

  ngOnInit() {

    this.tenantid = sessionStorage.getItem('guid');
    console.log('hello', this.tenantid);
    // this.getTenantRoom(this.currentTenant.roomId);


    this.tenantService.GetTenantById(this.tenantid).subscribe(data => {
    this.tenantInfo = data;
    console.log(this.tenantInfo);
    console.log('making sure');
  });
}


  getFullDate(flag: boolean) {
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let day: string;
    let month: string;
    let date: number;
    let year: number;
    let fulldate: string;

    // start date
    if (flag) {
      day = weekdays[this.tenantInfo.apiBatch.startDate.getDay()];
      month = months[this.tenantInfo.apiBatch.startDate.getMonth()];
      date = this.tenantInfo.apiBatch.startDate.getDate();
      year = this.tenantInfo.apiBatch.startDate.getFullYear();
      fulldate = day + ' ' + month + ' ' + date + ', ' + year;
    } else {
      day = weekdays[this.tenantInfo.apiBatch.endDate.getDay()];
      month = months[this.tenantInfo.apiBatch.endDate.getMonth()];
      date = this.tenantInfo.apiBatch.endDate.getDate();
      year = this.tenantInfo.apiBatch.endDate.getFullYear();
      fulldate = day + ' ' + month + ' ' + date + ', ' + year;
    }

    return fulldate;
  }
}
