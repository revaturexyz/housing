import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _moment from 'moment';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Room } from 'src/interfaces/room';
import { Complex } from 'src/interfaces/complex';
import { Gender } from 'src/interfaces/gender';
import { RoomType } from 'src/interfaces/room-type';
import { Amenity } from 'src/interfaces/amenity';
import { FormGroup } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material';
import { MatStepperModule } from '@angular/material';

// import { TestServiceData } from 'src/app/services/static-test-data';

@Component({
  selector: 'dev-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss']
})
// Component that provides form to add room to a complex
export class AddRoomComponent implements OnInit {
  // TODO: POPULATE THESE
  genderTypes: Gender[];
  roomTypes: RoomType[];
  // amenityList: Amenity[];
  formRoom: Room;
  // Init Form
  // For all select form inputs to show invalid on validation checks.
  public selectOptionRoomTypeInvalid = '';
  public selectOptionGenderInvalid = '';
  // Makes currently selected complex information available
  @Input() complexControl: Complex;
  // Decorator to output the selected mode
  @Output() modeOutput: EventEmitter<string> = new EventEmitter<string>();

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  increment = 1;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  amenityList: Amenity[] = [
    {amenity: 'Fridge', amenityId: this.increment, isSelected: true},
    {amenity: 'Microwave', amenityId: this.increment + 1, isSelected: true},
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    this.increment++;

    if ((value || '').trim()) {
      this.amenityList.push({amenity: value.trim(),
      amenityId: this.increment,
      isSelected: true});
    }

    if (input) {
      input.value = '';
    }
  }

  remove(amenity: Amenity): void {
    const index = this.amenityList.indexOf(amenity);

    if (index >= 0) {
      this.amenityList.splice(index, 1);
    }
  }


  constructor() {
  }

  ngOnInit() {
    // Sets form defaults
    this.formRoom = {
      roomId: null,
      apiAddress: null,
      roomNumber: '',
      numberOfBeds: null,
      apiRoomType: null,
      isOccupied: false,
      apiAmenity: null,
      startDate: new Date(),
      endDate: new Date(),
      apiComplex: this.complexControl,
      gender: null
    };
  }

  // Adds room to complex and switches mode back to details
  postAddRoom() {
    // Handle adding room to complex logic here
    this.modeOutput.emit('details'); // Sent to parent to change mode back to details
  }

  // Changes mode back to details
  cancelAddRoom() {
    this.modeOutput.emit('details');
  }
}
