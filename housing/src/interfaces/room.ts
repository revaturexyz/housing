import { Address } from './address';
import { Amenity } from './amenity';
import { Complex } from './complex';
import { RoomType } from './room-type';
import { Gender } from './gender';


import { Amenity2 } from './amenity';

export interface Room {
  roomId: number;
  apiAddress: Address;
  roomNumber: string;
  numberOfBeds: number;
  apiRoomType: RoomType;
  isOccupied: boolean;
  apiAmenity: Amenity[];
  startDate: Date;
  endDate: Date;
  apiComplex: Complex;
  gender: Gender;
}

/*Room2 
* The updated version of Room defined in Lodging API 
*
*/
export interface Room2 {
  roomId: string;//expected GUID 
  roomNumber: string; 
  complexId: string; 
  numBeds: number;
  apiRoomType: string; 
  Amenities: Amenity2[];
  leaseStart: Date;
  leaseEnd: Date;
}