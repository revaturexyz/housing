import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { Complex } from 'src/interfaces/complex';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Room } from '../../../interfaces/room';
// import { TestServiceData } from 'src/app/services/static-test-data';
import * as moment from 'moment';
import { ManageComplexComponent } from '../manage-complex.component';

@Component({
  selector: 'dev-complex-details',
  templateUrl: './complex-details.component.html',
  styleUrls: ['./complex-details.component.scss']
})

// Component to show the selected complex's details
export class ComplexDetailsComponent implements OnInit {
  // This makes the currently selected complex details avalible
  @Input() complexControl: Complex;
  // Needed for angular-material pagination
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  // Decorator to output the selected mode
  @Output() modeOutput: EventEmitter<string> = new EventEmitter<string>();
  // Decorator to output the targeted room
  @Output() targetRoomOutput: EventEmitter<Room> = new EventEmitter<Room>();

  // seededRooms =>
  testroom: Room = {
    roomId: 1,
    apiAddress: {addressId: 1,
      streetAddress: 'string',
      city: 'c',
      state: 'state',
      zipcode: '12345'
    },
    roomNumber: '1221',
    numberOfBeds: 4,
    apiRoomType: {typeId: 1,
      roomType: 'string'
    },
    isOccupied: true,
    apiAmenity: [{
      amenityId: 2,
      amenity: "balcony",
      isSelected: true
    },
    { amenityId: 3,
      amenity: "stove",
      isSelected: true
    }],
    startDate: new Date(),
    endDate: new Date(),
    apiComplex: null,
    gender: {genderId: 1,
      genderType: 'male'
    }
  };

  testroom2: Room = {
    roomId: 1,
    apiAddress: {addressId: 1,
      streetAddress: 'string',
      city: 'c',
      state: 'state',
      zipcode: '12345'
    },
    roomNumber: '1221',
    numberOfBeds: 4,
    apiRoomType: {typeId: 1,
      roomType: 'string'
    },
    isOccupied: true,
    apiAmenity: [{
      amenityId: 2,
      amenity: "balcony",
      isSelected: true
    },
    { amenityId: 3,
      amenity: "stove",
      isSelected: true
    }],
    startDate: new Date(),
    endDate: new Date(),
    apiComplex: null,
    gender: {genderId: 1,
      genderType: 'male'
    }
  };

  public seededRooms: Room[] = [
    // TestServiceData.room,
    // TestServiceData.room2
    this.testroom
  ];
  // id's for columns on material table
  displayedColumns = ['room#', 'start', 'end', 'edit', 'show'];
  // data source for material table
  // dataSource = new MatTableDataSource<Room>(this.seededRooms);   Why do we need MatTableDataSource in JS?
  dataSource = this.seededRooms;

  // editRoom =>
  // once called, output targeted room object and change mode to edit targeted room
  editRoom(room: Room) {
    this.targetRoomOutput.emit(room);
    this.modeOutput.emit('edit-room');
  }

  // showRoom =>
  // once called, output targeted room object and change mode to show targeted room's details
  showRoom(room: Room) {
    this.targetRoomOutput.emit(room);
    this.modeOutput.emit('show-room');
  }

  // changeMode =>
  // only change the current mode to whatever is specified in the html
  changeMode(reqMode: string) {
    this.modeOutput.emit(reqMode);
  }

  // dateFormat =>
  // function to format a Date object to 'MM/YYYY'
  dateFormat(date: Date) {
    return moment(date).format('MM/YYYY');
  }

  constructor() { }

  ngOnInit() {
    // Links paginator for material table
    // this.dataSource.paginator = this.paginator;    DON'T THINK WE NEED THIS (from previous batch)
  }
}
