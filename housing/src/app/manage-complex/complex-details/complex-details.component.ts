import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { Complex } from 'src/interfaces/complex';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Room } from '../../../interfaces/room';
import * as moment from 'moment';
import { ManageComplexComponent } from '../manage-complex.component';
import { MockRooms } from '../mock-rooms';
import { DataSource } from '@angular/cdk/table';
// import {trigger, animate, style, group, animateChild, query, stagger, transition, state} from '@angular/animations';


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
  mockrooms = new MockRooms();
  public seededRooms: Room[] = [
    this.mockrooms.testroom,
    this.mockrooms.testroom2,
    this.mockrooms.testroom3
  ];

  // id's for columns on material table
  displayedColumns = ['room#', 'start', 'end', 'edit', 'show'];

  // data source for material table
  dataSource = new MatTableDataSource(this.seededRooms);
  // dataSource = this.seededRooms;

  // used to filter data from MatTable
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

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
    this.dataSource.paginator = this.paginator;
  }
}
