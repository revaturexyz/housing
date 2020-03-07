import { Room } from '../../interfaces/room';


export class MockRooms {
  public testroom: Room = {
    roomId: '1',
    roomNumber: '1221',
    numberOfBeds: 4,
    apiRoomType: 'string',
    amenities: [{
      id: '2',
      amenityType: 'balcony',
      description: 'none'
    },
    { id: '3',
      amenityType: 'stove',
      description: 'none'
    }],
    leaseStart: new Date(),
    leaseEnd: new Date(),
    complexId: null,
    //gender: 
  };

  public testroom2: Room = {
    roomId: '2',
    roomNumber: '1222',
    numberOfBeds: 4,
    apiRoomType: 'string',
    amenities: [{
      id: '2',
      amenityType: 'balcony',
      description: 'none'
    },
    { id: '3',
      amenityType: 'stove',
      description: 'none'
    }],
    leaseStart: new Date(),
    leaseEnd: new Date(),
    complexId: null,
    //gender: 
  };

  public testroom3: Room = {
    roomId: '3',
    roomNumber: '1223',
    numberOfBeds: 4,
    apiRoomType: 'string',
    amenities: [{
      id: '2',
      amenityType: 'balcony',
      description: 'none'
    },
    { id: '3',
      amenityType: 'stove',
      description: 'none'
    }],
    leaseStart: new Date(),
    leaseEnd: new Date(),
    complexId: null,
    //gender: 
  };

  public testrooms: Room[] = [this.testroom, this.testroom2];

}
