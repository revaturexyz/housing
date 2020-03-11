import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { TestServiceData } from 'src/app/services/static-test-data';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Complex } from 'src/interfaces/complex';
import { Amenity, PostAmenity } from 'src/interfaces/amenity';
import { MatChipInputEvent } from '@angular/material';
import { LodgingService } from 'src/app/services/lodging.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dev-edit-complex',
  templateUrl: './edit-complex.component.html',
  styleUrls: ['./edit-complex.component.scss']
})
// Component used to provide form in order to edit complex
export class EditComplexComponent implements OnInit {
  // This makes the details of the complex you want to edit avalible
  @Input() targetComplex: Complex;
  // Decorator to output the selected mode
  @Output() modeOutput: EventEmitter<string> = new EventEmitter<string>();
  // seed for simulating all amenities
  // seededAmenityList = TestServiceData.dummyAmenityList1;
  // Init for form binding
  formComplex: Complex;
  amenityList: Amenity[];

  constructor(
    private LodgeService: LodgingService,
    private router: Router
  ) {
  }

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  increment = 1;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];


  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    this.increment++;

    if ((value || '').trim()) {
      this.formComplex.complexAmenities.push({amenityType: value.trim(),
      id: 'bb79eb06-6650-4295-a90d-06d0e20b591e',
      description: ''
    });
    }

    if (input) {
      input.value = '';
    }
  }

  remove(amenity: Amenity): void {
    const index = this.formComplex.complexAmenities.indexOf(amenity);

    if (index >= 0) {
      this.formComplex.complexAmenities.splice(index, 1);
    }
  }

  ngOnInit() {
    // Populate default form values
    this.formComplex = this.targetComplex;
  }

  // to save edits to db and change mode back to details
  putEditComplex() {
    // Handle Submit Here
    console.log(this.formComplex);


    this.LodgeService.updateComplexById(this.formComplex).subscribe(
      () => this.modeOutput.emit('details')
    );


    // this.modeOutput.emit('details'); // Sent to parent to change mode back to details
  }

  // to cancel all changes and change mode back to details
  cancelEditComplex() {
    this.modeOutput.emit('details');
  }

  // to delete complex from db and change mode back to details
  deleteComplex() {
    // Handle Delete Here
    console.log(this.formComplex.complexId);


    this.LodgeService.deleteComplexById(this.formComplex.complexId).subscribe(
      () => this.modeOutput.emit('init')
    );


    // this.modeOutput.emit('init');
  }

  // This will be used to select defaults for amenity selection list
  compareWithFunc(a: { name: any; }, b: { name: any; }) {
    return a.name === b.name;
  }
}
