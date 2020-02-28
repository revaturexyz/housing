import { Address } from './address';
import { Amenity } from './amenity';
import { Complex } from './complex';
import { RoomType } from './room-type';
import { Gender } from './gender';

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
* The updated version of Room 
*Both are here untill finalize changes will be made 
*/
export interface Room2 {
  roomId: number;
  apiAddress: Address;
  roomNumber: string;
  numberOfBeds: number;
  apiRoomType: RoomType;
  numberOfOccupants: number; 
  apiAmenity: Amenity[];
  apiComplex: Complex;
  gender: Gender;
}