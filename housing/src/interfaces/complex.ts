import { Address } from './address';
import { Provider } from './account/provider';
import { Amenity } from './amenity';

export interface Complex {
  complexId: number;
  apiAddress: Address;
  apiProvider: Provider;
  complexName: string;
  contactNumber: string;
  amenity: Amenity[];
}

export interface Complex2 { 
  Id: string; 
  AddressId: string; 
  ProviderId: string; 
  ComplexName: string; 
  ContactNumber: string;
}
