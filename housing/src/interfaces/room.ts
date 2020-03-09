import { Address } from './address';
import { Amenity } from './amenity';
import { Complex } from './complex';
import { RoomType } from './room-type';
import { Gender } from './gender';


/*Room current version of room 
*
* The updated version of Room defined in Lodging API 
* Matching the model of the room in the lodging API 
* 
* If information about the complex is wanted 
* Using the complexID will to access the API in another call to get info 
* of the complex and the address stored inside the complex object  
*/
export interface Room {
  roomId: string;//expected GUID 
  roomNumber: string; 
  complexId: string; //GUID
  numberOfBeds: number;
  numberOfOccupants: number;
  amenities: Amenity[];
  apiRoomType: string; 
  leaseStart: Date;
  leaseEnd: Date;
  gender: string;
}


// ABOVE OLD BUT USED FOR OLD MOCK TEST 
// SO EXISTING CODE COMPILES IT REMAINS ABOVE 

//NEW IMPLEMENTATION AND API ACCESS WILL THEREFORE USE INTERFACE MODELS BELOW 


import { PostAmenity } from './amenity';


/* Interface for Posting a room 
*
*
*/ 
export interface postRoom{
  roomNumber: string; 
  complexId: string; //GUID
  numberOfBeds: number;
  apiRoomType: string; 
  amenities: PostAmenity[];
  leaseStart: Date;
  leaseEnd: Date;
}