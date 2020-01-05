import { Room } from '../../interfaces/room';


export class MockRooms {
  public testroom: Room = {
    roomId: 1,
    apiAddress: {addressId: 1,
      streetAddress: 'string',
      city: 'c',
      state: 'state',
      zipcode: '12345'
    },
    roomNumber: '1221A',
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
  
  public testroom2: Room = {
    roomId: 2,
    apiAddress: {addressId: 1,
      streetAddress: 'string',
      city: 'c',
      state: 'state',
      zipcode: '12345'
    },
    roomNumber: '1221B',
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
  
  public testrooms: Room[] = [this.testroom, this.testroom2];

}