import { Address } from './address';
import { Amenity } from './amenity';
import { Complex } from './complex';
import { RoomType } from './room-type';
import { Gender } from './gender';



import { PostAmenity } from './amenity';
import { Amenity2 } from './amenity';
/*Room object Depricated 
*
*
*/ 
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

/*Room2 current version of room 
*
* The updated version of Room defined in Lodging API 
* Matching the model of the room in the lodging API 
* 
* If information about the complex is wanted 
* Using the complexID will to access the API in another call to get info 
* of the complex and the address stored inside the complex object  
*/
export interface Room2 {
  roomId: string;//expected GUID 
  roomNumber: string; 
  complexId: string; //GUID
  numBeds: number;
  apiRoomType: string; 
  Amenities: Amenity2[];
  leaseStart: Date;
  leaseEnd: Date;
}

/* Interface for Posting a room 
*
*
*/ 
export interface postRoom{
  roomNumber: string; 
  complexId: string; //GUID
  numBeds: number;
  apiRoomType: string; 
  Amenities: PostAmenity[];
  leaseStart: Date;
  leaseEnd: Date;
}