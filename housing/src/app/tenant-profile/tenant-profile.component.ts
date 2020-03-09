import { Component, OnInit } from '@angular/core';
//import { TenantService } from 'src/app/services/tenant.service';
//import { UserService } from 'src/app/services/user.service';
import { Tenant } from 'src/interfaces/tenant';
import { MatChipInputEvent } from '@angular/material';
import { MatStepperModule } from '@angular/material';

@Component({
  selector: 'dev-tenant-profile',
  templateUrl: './tenant-profile.component.html',
  styleUrls: ['./tenant-profile.component.scss']
})

export class TenantProfileComponent implements OnInit {

  tenant_info: Tenant;

  constructor
  (
    //private tenantService: TenantService,
    //private user: UserService
  ) 
  {
    //empty these when user account prepared and userservice working
    this.tenant_info = {
      id: 'g28a-2917-1983-298f-98c1-a19a',
      email: 'test@email.com',
      gender: 'Alien',
      firstName: 'Bob',
      lastName: 'Badoo',
      addressId: '1',
      roomId: '1',
      carId: 1,
      batchId: 1,
      tenantAddress:
      {
        addressId: '1',
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
      batch:
      {
        id: 1,
        batchCurriculum: '.NET',
        startDate: new Date(2020, 1, 3),
        endDate: new Date(2120, 2, 3),
        trainingCenter: 'f55db185-205e-4669-baf3-1872e87b9bcc'
      },
      trainingCenter: 'f55db185-205e-4669-baf3-1872e87b9bcc'
    }
  }

  ngOnInit() {}

  /*
  getTenantProfile() 
  {
    this.user.UserId$.subscribe(id => {
      this.tenantService.GetTenantById(id)
      .toPromise()
      .then((data) => this.tenant_info = data)
      .catch((err) => console.log(err));
    });
  }
  */

  getFullDate(flag : Boolean)
  {
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var day : string;
    var month : string;
    var date : number;
    var year : number;
    var fulldate : string;

    //start date
    if(flag)
    {
      day = weekdays[this.tenant_info.batch.startDate.getDay()];
      month = months[this.tenant_info.batch.startDate.getMonth()];
      date = this.tenant_info.batch.startDate.getDate();
      year = this.tenant_info.batch.startDate.getFullYear();
      fulldate = day+' '+month+' '+date+', '+year;
    }
    //end date
    else
    {
      day = weekdays[this.tenant_info.batch.endDate.getDay()];
      month = months[this.tenant_info.batch.endDate.getMonth()];
      date = this.tenant_info.batch.endDate.getDate();
      year = this.tenant_info.batch.endDate.getFullYear();
      fulldate = day+' '+month+' '+date+', '+year;
    }
    
    return fulldate;
  }
}
