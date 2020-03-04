
import { Provider } from './account/provider';
import { Amenity } from './amenity';
import { PostAmenity } from './amenity';
import { Amenity2 } from './amenity';
import { Address } from './address';
import { postaddress } from './address';
import { ApiComplexAddress } from './address';

/*When retriving information about a complex from the API 
* All of theese fields are expected 
* and can be returned by the API 
*/
export interface Complex {
  complexId: number; // GUID 
  apiAddress: Address;
  ProviderId: string; // GUID 
  complexName: string;
  contactNumber: string;
  amenities: Amenity2[];
}

/* Interface for posting a complex  
* Not Expected: complexID would be created in te API 
* Address API will provide us with the address object 
*
* Provider who can access this method will have access to their provider information 
* - and create a provider object to attach to the complex object 
*
* Amenitites will contain PostAmenity objects, 
* that only contain a the property AmenityType of type string 
* the amenityId will be created in the API 
* 
*/ 
export interface postComplex {
  Address: postaddress; // Address object post addrees used 
  ProviderID: string; // GUID - Can access a separate service 
  ComplexName: string;
  ContactNumber: string;
  Amenities: PostAmenity[];
}



