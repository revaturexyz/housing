import {Component, OnInit, NgZone, ViewChild} from '@angular/core';
import {FormGroup, FormControl, Validators, FormGroupDirective, NgForm} from '@angular/forms';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {ErrorStateMatcher} from '@angular/material/core';
import {take} from 'rxjs/operators';
import { regExpEscape } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component(
  {
    selector: 'dev-tenant-maintenance',
    templateUrl: './tenant-maintenance.component.html',
    styleUrls: ['./tenant-maintenance.component.scss']
  })

export class TenantMaintenanceComponent implements OnInit 
{
  areas: Array<string>;         //list of areas in 
  area_entrance: Array<string>; //entrance/halls
  area_living: Array<string>;   //living/dining room
  area_kitchen: Array<string>;  //kitchen
  area_bed: Array<string>;      //bedroom
  area_bath: Array<string>;     //bathroom
  area_other: Array<string>;    //other equipment

  matcher = new ESM();
  
  maintenanceFG = new FormGroup(
    {
      unitFC: new FormControl(''),
      roomFC: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]),
      firstnameFC: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z\'`]*')]),
      lastnameFC: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z\'`]*')]),
      emailFC: new FormControl('', [Validators.email]),
      areaFC: new FormControl(''),
      descriptionFC: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9,.!@#$%&)(+\'" ]*')])
    });

  constructor(private _ngZone: NgZone) 
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

  ngOnInit() {}

  @ViewChild('autosize', {static:false}) 
  
  autosize: CdkTextareaAutosize;
  triggerResize() 
  {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }

  VUnit(evnt) 
  {
    evnt = (evnt) ? evnt : window.event;
    var charCode = (evnt.which) ? evnt.which : evnt.keyCode;
    if (charCode < 48 || charCode > 57)
      return false;

    return true;
  }

  onSubmit()
  {
    //send to db
    //send notification to provider
    //note: notification from provider to coordinator when processing request
  }
}

export class ESM implements ErrorStateMatcher
{
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean 
  {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}
