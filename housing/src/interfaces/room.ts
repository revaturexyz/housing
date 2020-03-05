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



// ABOVE OLD BUT USED FOR OLD MOCK TEST 
// SO EXISTING CODE COMPILES IT REMAINS ABOVE 

//NEW IMPLEMENTATION AND API ACCESS WILL THEREFORE USE INTERFACE MODELS BELOW 


import { PostAmenity } from './amenity';
import { Amenity2 } from './amenity';

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