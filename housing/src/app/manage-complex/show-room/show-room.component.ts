import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Room } from 'src/interfaces/room';
import { Complex } from 'src/interfaces/complex';
import {trigger, animate, style, group, animateChild, query, stagger, transition, state} from '@angular/animations';
import { LodgingService } from 'src/app/services/lodging.service';
// import { TestServiceData } from 'src/app/services/static-test-data';

@Component({
  selector: 'dev-show-room',
  templateUrl: './show-room.component.html',
  styleUrls: ['./show-room.component.scss'],
  animations: [
    trigger('show', [
        transition(':enter', [
            style({ opacity: 0 }),
            animate(1200, style({ opacity: 1 }))
        ]),
        transition(':leave', [
            style({ opacity: 1 }),
            animate(1300, style({ opacity: 0 }))
        ])
    ])
  ]
})
export class ShowRoomComponent implements OnInit {
  // Seeded data for view testing
  // seededGenderTypes = TestServiceData.dummyGender;
  // seededRoomTypes = TestServiceData.dummyRoomTypeList;
  // For all select form inputs to show invalid on validation checks.
  public selectOptionRoomTypeInvalid = '';
  public selectOptionGenderInvalid = '';
  // These make the selected complex and room information available
  @Input() complexControl: Complex;
  @Input() targetRoom: Room;
  // Decorator to output the selected mode
  @Output() modeOutput: EventEmitter<string> = new EventEmitter<string>();

  OccupantBool: boolean;
  role: string;

  constructor(
    private LodgeService: LodgingService
  ) { }

  ngOnInit() {
    this.role = sessionStorage.getItem('role');
    if (this.targetRoom.numberOfOccupants === 0) {
      this.OccupantBool = false;
    } else {
      this.OccupantBool = true;
    }
  }

  // Button handler for when user clicks back button
  handleBackButton() {
    this.modeOutput.emit('details');
  }
}
