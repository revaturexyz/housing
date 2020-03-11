import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _moment from 'moment';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Room } from 'src/interfaces/room';
import { Complex } from 'src/interfaces/complex';
import { Gender } from 'src/interfaces/gender';
import { RoomType } from 'src/interfaces/room-type';
import { Amenity } from 'src/interfaces/amenity';
import { MatChipInputEvent } from '@angular/material';
import { LodgingService } from 'src/app/services/lodging.service';

// import { TestServiceData } from 'src/app/services/static-test-data';

@Component({
  selector: 'dev-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.scss']
})
// Component to provide form in order to edit room
export class EditRoomComponent implements OnInit {
  // TODO: POPULATE THESE
  genderTypes: Gender[];
  // amenityList: Amenity[];

  public roomTypes: RoomType[] = [
    {roomType: 'Dormitory', typeId: 1},
    {roomType: 'Apartment', typeId: 2},
    {roomType: 'TownHouse', typeId: 3},
    {roomType: 'Hotel/Motel', typeId: 4}
  ];

  // For all select form inputs to show invalid on validation checks.
  public selectOptionRoomTypeInvalid = '';
  public selectOptionGenderInvalid = '';
  // These make the selected complex and room information available
  @Input() complexControl: Complex;
  @Input() targetRoom: Room;
  // Decorator to output the selected mode
  @Output() modeOutput: EventEmitter<string> = new EventEmitter<string>();
  // Init for form
  formRoom: Room;
  editBool: boolean;


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
      this.formRoom.amenities.push({amenityType: value.trim(),
      id: 'bb79eb06-6650-4295-a90d-06d0e20b591e',
      description: ''
    });
    }

    if (input) {
      input.value = '';
    }
  }

  remove(amenity: Amenity): void {
    const index = this.formRoom.amenities.indexOf(amenity);

    if (index >= 0) {
      this.formRoom.amenities.splice(index, 1);
    }
  }

  constructor(
    private LodgeService: LodgingService
  ) {
  }

  ngOnInit() {
    if (this.targetRoom.numberOfOccupants === 0) {
      this.editBool = true;
    } else {
      this.editBool = false;
    }
    // Populate default form values
    this.formRoom = this.targetRoom;
  }

  // Save edits and change mode back to details
  postEditRoom() {
    this.formRoom.complexId = this.complexControl.complexId;
    console.log(this.formRoom);


    this.LodgeService.updateRoom(this.formRoom).subscribe(
      () => this.modeOutput.emit('details')
    );


    // Handle editing room to complex logic here
    // this.modeOutput.emit('details'); // Sent to parent to change mode back to details
  }

  postRequestEditRoom() {
    // Handle editing room to complex logic here based on request
    this.modeOutput.emit('details'); // Sent to parent to change mode back to details
  }

  // Delete room from db and change mode to details
  deleteRoom() {
    // Handle delete room logic here


    this.LodgeService.deleteRoomById(this.targetRoom.roomId).subscribe(
      () => this.modeOutput.emit('details')
    );


    // this.modeOutput.emit('details'); // Sent to parent to change mode back to details
  }

  deleteRequestRoom() {
    // Handle delete room logic here based on request
    this.modeOutput.emit('details'); // Sent to parent to change mode back to details
  }

  // Cancel all changes and change mode to details
  cancelEditRoom() {
    this.modeOutput.emit('details');
  }

}
