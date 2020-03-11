import { Component, OnInit } from '@angular/core';
import { TenantService } from 'src/app/services/tenant.service';
// import { UserService } from 'src/app/services/user.service';
import { Tenant } from 'src/interfaces/tenant';
import { MatChipInputEvent } from '@angular/material';
import { MatStepperModule } from '@angular/material';
import {LodgingService} from '../services/lodging.service';
import {Room} from 'src/interfaces/room';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TenantAddress } from 'src/interfaces/tenant-address';
import { Car } from 'src/interfaces/car';
import { Batch } from 'src/interfaces/batch';
import { Location } from '@angular/common';
import { PostTenant } from 'src/interfaces/post-tenant';
import { TenantSearcherService } from '../services/tenant-searcher.service';

@Component({
  selector: 'dev-tenant-profile',
  templateUrl: './tenant-profile.component.html',
  styleUrls: ['./tenant-profile.component.scss']
})

export class TenantProfileComponent implements OnInit {

  tenantInfo: Tenant = null;
  testTenant: Tenant;

  batchShowString = 'Choose Batch';
  batchList: Batch[] = [];

  genderShowString = 'Choose Gender';
  genders: string[] = ['Male', 'Female'];
  trainCenId = '837c3248-1685-4d08-934a-0f17a6d1836a';

  constructor(
    public tenantService: TenantService,
    public tenantSearcher: TenantSearcherService,
    public lodgingService: LodgingService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
    // private user: UserService
  ) {
  }

  tenantid: string = null;
  // Tennant id should be available at runtime. Okta should have this value
  // stored in local, cookies, or session storage

  viewMode = 'tenant';
  // This will be true if a coordinator is viewing the room

  routeSub: Subscription;

  currentRoom: Room = null;
  // Contains the room information to be displayed on the page.

  ngOnInit() {
    this.routeSub = this.route.url.subscribe(url => {
      if (url[0].path === 'tenant-profile') {
        this.tenantid = sessionStorage.getItem('guid');
        this.viewMode = 'tenant';
      } else if (url[0].path === 'add-tenant') { // Coordinator Add
        this.viewMode = 'cAdd';
        this.tenantid = null;
      } else if (url[0].path === 'select-tenant') { // Coordinator View
        this.tenantid = url[1].path;
        this.viewMode = 'cView';
      } else if (url[0].path === 'edit-tenant') { // Coordinator Edit
        this.tenantid = url[1].path;
        this.viewMode = 'cEdit';
      }
      if (this.tenantid != null) {
      this.tenantService.GetTenantById(this.tenantid).subscribe(data => {
        this.tenantInfo = data;
      }); } else {
        this.tenantInfo = {
          apiAddress: {} as TenantAddress,
          apiBatch: {} as Batch
        } as Tenant;
      }
      if (this.editMode()) {
        this.getBatchesForEdit();
      }
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

  editMode() {
    return (this.viewMode === 'cAdd' || this.viewMode === 'cEdit');
  }

  getBatchesForEdit() {
    this.tenantService.GetBatchByTrainingCenterId(this.trainCenId)
      .toPromise()
      .then((data) => this.batchList = data)
      .catch((err) => console.log(err));
  }

  addCar() {
    if (this.tenantInfo && !this.tenantInfo.apiCar) {
      this.tenantInfo.apiCar = {} as Car;
    }
  }

  removeCar() {
    if (this.tenantInfo && this.tenantInfo.apiCar) {
      this.tenantInfo.carId = 0;
      this.tenantInfo.apiCar = null;
    }
  }

  cancel() {
    this.location.back();
  }

  edit() {
    this.router.navigate(['dashboard/edit-tenant/' + this.tenantid]);
  }

  search() {
    this.router.navigate(['dashboard/search-tenant/']);
  }

  delete() {
    this.tenantSearcher.deleteTenant(this.tenantid)
    .then(() => this.router.navigate(['dashboard/search-tenant/']));
  }

  async postTenantOnSubmit() {
    console.log(this.tenantInfo);
    try {
      this.tenantInfo.id = null;
      this.tenantInfo.trainingCenter = this.trainCenId;
      this.tenantInfo.apiBatch.trainingCenter = this.trainCenId;
      await this.tenantService.PostTenant({
        id: null,
        email: this.tenantInfo.email,
        gender: this.tenantInfo.gender,
        firstName: this.tenantInfo.firstName,
        lastName: this.tenantInfo.lastName,
        apiCar: this.tenantInfo.apiCar,
        apiAddress: this.tenantInfo.apiAddress,
        trainingCenter: this.tenantInfo.trainingCenter,
        apiBatch: this.tenantInfo.apiBatch
      } as PostTenant)
        .then(result => this.router.navigate(['dashboard/select-tenant/' + result.id]));
    } catch (err) {
      console.log(err);
    }
    // this.router.navigate(['show-tenant']);
  }
  async putTenantOnSubmit() {
    console.log(this.tenantInfo);
    await this.tenantService.PutTenant(this.tenantInfo)
    .then(result => this.router.navigate(['dashboard/select-tenant/' + this.tenantid]));
  }
}
