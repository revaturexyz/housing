import {Component, OnInit, NgZone, ViewChild} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {ErrorStateMatcher} from '@angular/material/core';
import {take} from 'rxjs/operators';

@Component({
  selector: 'dev-tenant-maintenance',
  templateUrl: './tenant-maintenance.component.html',
  styleUrls: ['./tenant-maintenance.component.scss']
})
export class TenantMaintenanceComponent implements OnInit {

  areas: Array<string>;         //list of areas in 
  area_entrance: Array<string>; //entrance/halls
  area_living: Array<string>;   //living/dining room
  area_kitchen: Array<string>;  //kitchen
  area_bed: Array<string>;      //bedroom
  area_bath: Array<string>;     //bathroom
  area_other: Array<string>;    //other equipment
  
  maintenanceFG = new FormGroup({
    unitFC: new FormControl(''),
    roomFC: new FormControl(''),
    firstnameFC: new FormControl(''),
    lastnameFC: new FormControl(''),
    emailFC: new FormControl(''),
    areaFC: new FormControl(''),
    descriptionFC: new FormControl('')
  });

  constructor(
    private _ngZone: NgZone
  ) 
  {
    this.areas =
    [
      'Entrance/Halls',
      'Living/Dining Room',
      'Kitchen',
      'Bedroom(s)',
      'Bathroom(s)',
      'Other'
    ];
  }

  ngOnInit() {
  }

  @ViewChild('autosize', {static:false}) autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  onSubmit()
  {
    console.log(this.maintenanceFG.value);
  }
}
