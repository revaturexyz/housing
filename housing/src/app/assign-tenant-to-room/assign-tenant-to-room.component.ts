import { Component, OnInit } from '@angular/core';
import { RoomWithTenants } from '../../interfaces/room-with-tenant';
import { TenantInRoom } from '../../interfaces/tenant-in-room';
import { TenantAssignService } from '../services/tenant-assign-service';

@Component({
  selector: 'dev-assign-tenant-to-room',
  templateUrl: './assign-tenant-to-room.component.html',
  styleUrls: ['./assign-tenant-to-room.component.scss']
})
export class AssignTenantToRoomComponent implements OnInit {

  // Initial array of rooms pre-prioritized
  roomArray: [RoomWithTenants, number][];

  // Displayed array of rooms, prioritized
  prioritizedRooms: [RoomWithTenants, number][];

  // All rooms available for a selected tenant
  availableRooms: RoomWithTenants[];

  // All tenants that don't have a room
  assignableTenants: TenantInRoom[];

  // Currently selected tenant to be assigned a room
  currentTenant: TenantInRoom;

  // Currently selected room for a tenant
  currentRoomId: string;

  sortCar = false;
  sortLang = false;
  sortBatch = false;

  roomsLoaded = false;

  // Determines how strongly to prioritize specific sorts
  batchPriorityWeight = 0.6;
  langPriorityWeight = 0.6;

  constructor(
    private tenantAssignService: TenantAssignService
  ) { }

  ngOnInit() {
    // TODO uncomment to use service and comment out usage of mock data
    // this.tenantAssignService.getTenantsNotAssignedRoom().then(
    //   result => {
    //     this.assignableTenants = result;
    //   console.log("gottenants");
    // });
    this.getUnassignedTenants();
    // this.assignableTenants = TENANTS;
  }

  getUnassignedTenants() {
    this.tenantAssignService.getTenantsNotAssignedRoom().then(
      result => {
        this.assignableTenants = result;
        console.log('gottenants');
      });
  }

  selectTenant(tenant: TenantInRoom) {
    this.currentTenant = tenant;
    console.log(tenant);
    this.updateRooms();
  }

  selectRoom(roomId: string) {
    this.currentRoomId = roomId;
    console.log(`room selected: ${roomId}`);
  }

  // Assigns a tenant to a room
  assignRoom() {
    console.log('assign clicked');

    this.tenantAssignService.assignTenant(this.currentTenant.id, this.currentRoomId).then(() => {
      console.log('Tenant assigned');
    }).catch(() => {
      console.log('Tenant could not be assigned');
    }).then(() => {
      this.getUnassignedTenants();
      console.log('refreshed tenants');
    });
  }

  updateRooms() {
    this.roomsLoaded = false;
    // TODO uncomment to use service and comment out usage of mock data
    this.tenantAssignService.getAvailableRoomsWithTenants(this.currentTenant.gender, this.currentTenant.batch.endDate.toString())
      .then(result => {
        this.availableRooms = result;
        this.roomsLoaded = true;
        console.log('avail rooms loaded');
      }).then(() => {
        this.roomArray = [];
        this.availableRooms.forEach(element => {
          this.roomArray.push([element, 0]);
        });
        this.prioritizedRooms = this.prioritizeWithSorts(this.roomArray);
        console.log(this.prioritizedRooms);

      });
    // this.availableRooms = ROOMS;

    this.prioritizedRooms = this.prioritizeWithSorts(this.roomArray);
  }

  /* Sorting Checkbox Methods; sorts room list whenever a checkbox is clicked */
  toggleCar() {
    this.sortCar = !this.sortCar;
    this.prioritizedRooms = this.prioritizeWithSorts(this.roomArray);
  }
  toggleLang() {
    this.sortLang = !this.sortLang;
    this.prioritizedRooms = this.prioritizeWithSorts(this.roomArray);
  }
  toggleBatch() {
    this.sortBatch = !this.sortBatch;
    this.prioritizedRooms = this.prioritizeWithSorts(this.roomArray);
  }

  /*
    Add a specific amount of "priority" to rooms based on if the tenant owns a car and
    how many cars that room has vs if the tenant owns a car
  */
  prioritizeRoomsByCar(arr: [RoomWithTenants, number][]) {
    arr.forEach(roomTuple => {
      const currentOccupancy = roomTuple[0].numberOfBeds - roomTuple[0].tenants.length;
      let totalCars = 0;
      roomTuple[0].tenants.forEach(t => {
        if (t.car) {
          totalCars++;
        }
      });
      let priority;
      if (this.currentTenant.car) {
        priority = (currentOccupancy - totalCars) / currentOccupancy;
      } else {
        priority = (totalCars - currentOccupancy) / currentOccupancy;
      }
      roomTuple[1] += priority;
      // roomTuple[1] = Math.round((roomTuple[1] + priority)*100)/100;
    });
  }

  /*
    Add a specific amount of "priority" to rooms based on what the tenant's curriculum is
    and how many tenants in a room share that same curriculum
  */
  prioritizeRoomsByLang(arr: [RoomWithTenants, number][]) {
    arr.forEach(roomTuple => {
      roomTuple[0].tenants.forEach(tenant => {
        if (tenant.batch.batchCurriculum === this.currentTenant.batch.batchCurriculum) {
          roomTuple[1] += this.langPriorityWeight;
        }
      });
      roomTuple[1] = Math.round(roomTuple[1] * 100) / 100;
    });
  }

  /*
    Add a specific amount of "priority" to rooms based on what the tenant's batch is
    and how many tenants in a room are in the same batch
  */
  prioritizeRoomsByBatch(arr: [RoomWithTenants, number][]) {
    arr.forEach(roomTuple => {
      roomTuple[0].tenants.forEach(tenant => {
        if (tenant.batch.id === this.currentTenant.batch.id) {
          roomTuple[1] += this.batchPriorityWeight;
        }
      });
      roomTuple[1] = Math.round(roomTuple[1] * 100) / 100;
    });
  }

  // Applies every sorting algorithm based on which checkboxes are checked
  prioritizeWithSorts(arr: [RoomWithTenants, number][]): [RoomWithTenants, number][] {
    const result = JSON.parse(JSON.stringify(arr)); // shallow copy of the array
    if (this.sortCar) {
      this.prioritizeRoomsByCar(result);
    }
    if (this.sortLang) {
      this.prioritizeRoomsByLang(result);
    }
    if (this.sortBatch) {
      this.prioritizeRoomsByBatch(result);
    }
    this.sortRoomsByPriority(result);
    return result;
  }

  // Sorts list by the 2nd item in each tuple element of the array
  // Is used to sort rooms by priority, descending
  sortRoomsByPriority(someArray: [string, number][]) {
    someArray.sort((elem1, elem2) => elem1[1] > elem2[1] ? -1 : elem1[1] < elem2[1] ? 1 : 0);
  }

}
