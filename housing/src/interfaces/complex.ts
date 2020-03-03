import { Address } from './address';
import { Provider } from './account/provider';
import { Amenity } from './amenity';

import { Amenity2 } from './amenity';


export interface Complex {
  complexId: number;
  apiAddress: Address;
  apiProvider: Provider;
  complexName: string;
  contactNumber: string;
  amenity: Amenity[];
}

/*Complex2 
*interface of complex as defined by lodging API 
*
*/ 
export interface Complex2 { 
  id: string; 
  addressId: string; 
  providerId: string; 
  complexName: string; 
  contactNumber: string;
  complexAmenity: Amenity2[]; 
}
