import { Component, OnInit } from '@angular/core';
import { Complex } from 'src/interfaces/complex';
import { FormControl } from '@angular/forms';
// import { TestServiceData } from 'src/app/services/static-test-data';
import { Room } from 'src/interfaces/room';
import { Amenity } from 'src/interfaces/amenity';
import { Status } from 'src/interfaces/account/status';
import { Address } from 'src/interfaces/address';
import { Provider} from 'src/interfaces/account/provider'

@Component({
  selector: 'dev-manage-complex',
  templateUrl: './manage-complex.component.html',
  styleUrls: ['./manage-complex.component.scss']
})

// Component used to handle logic behind selecting and managing a complex
export class ManageComplexComponent implements OnInit {


  // public dummyAmenity: Amenity = {
  //   amenityId: 1,
  //   amenity: "pool",
  //   isSelected: true,
  // };
  // public dummyAddress: Address = {
  //   addressId: 1,
  //   streetAddress: '123 Sesame St',
  //   city: 'Arlington',
  //   state: 'TX',
  //   zipcode: '12345'
  // };
  // public dummyStatus: Status = {
  //   statusText: 'approved'
  // }
  // public dummyProvider: Provider  = {
  //   providerId: 1,
  //   coordinatorId: '1',
  //   name: 'john',
  //   email: 'john@email.com',
  //   status: this.dummyStatus,
  //   accountCreatedAt: new Date(),
  //   accountExpiresAt: new Date(),
  // };
  // public dummyComplex: Complex = {
  //   complexId: 1,
  //   apiAddress: this.dummyAddress,
  //   apiProvider: this.dummyProvider,
  //   complexName: 'liv+',
  //   contactNumber: '1234567890',
  //   amenity: [this.dummyAmenity],
  // };
  public seededComplexes: Complex[] = [
    // TestServiceData.dummyComplex,
    // TestServiceData.dummyComplex2,
    // TestServiceData.dummyComplex,
    // TestServiceData.dummyComplex2
    // this.dummyComplex
  ];

  // mode selection =>
  // 'init' for initial loading,
  // 'details' for after provider is selected,
  // 'add-room' for adding room,
  // 'edit-room' for editing rooms,
  // 'edit-complex for editing complex
  mode = 'init';

  // target Room =>
  // variable that holds room information for editing
  targetRoom: Room;

  // complex Control =>
  // form controller to hold the current selected complex
  complexControl = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  changeMode(reqMode: any) {
    console.log('mode =', reqMode);
    if ((typeof reqMode) === 'object') {
      this.mode = 'details';
    } else {
      this.mode = reqMode;
    }
  }

  changeTargetRoom(reqRoom: Room) {
    this.targetRoom = reqRoom;
  }

}
