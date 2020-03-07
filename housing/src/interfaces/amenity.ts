/* Amenity2 
*  Amenity object expected to be recieved from the API 
* 
*/ 
export interface Amenity {
  id: string; //GUID 
  amenityType: string;
  description: string;
}

/* PostAmenity 
* Sends only the Amenity Type 
* Description and AmenityID are null and created 
* 
*/
export interface PostAmenity { 
  amenityType: string; 
   
}