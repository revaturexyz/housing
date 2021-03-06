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

  constructor(
    private ngZone: NgZone
  ) {
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

  areas: Array<string>;         // list of areas in
  areaEntrance: Array<string>; // entrance/halls
  areaLiving: Array<string>;   // living/dining room
  areaKitchen: Array<string>;  // kitchen
  areaBed: Array<string>;      // bedroom
  areaBath: Array<string>;     // bathroom
  areaOther: Array<string>;    // other equipment

  maintenanceFG = new FormGroup({
    unitFC: new FormControl(''),
    roomFC: new FormControl(''),
    firstnameFC: new FormControl(''),
    lastnameFC: new FormControl(''),
    emailFC: new FormControl(''),
    areaFC: new FormControl(''),
    descriptionFC: new FormControl('')
  });

  @ViewChild('autosize', {static: false}) autosize: CdkTextareaAutosize;

  ngOnInit() {
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  onSubmit() {
    console.log(this.maintenanceFG.value);
  }
}
