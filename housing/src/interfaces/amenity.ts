//Old Amenity Object which is depricated 
export interface Amenity {
  amenityId: number;
  amenity: string;
  isSelected: boolean;
}

/* Amenity2 
*  Amenity object expected to be recieved from the API 
* 
*/ 
export interface Amenity2{
  AmenityId: string; //GUID 
  amenity: string;
  Description: string;
}


/* PostAmenity 
* Sends only the Amenity Type 
* Description and AmenityID are null and created 
* 
*/
export interface PostAmenity { 
  AmenityType: string; 
   
}

