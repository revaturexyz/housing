export interface Address {
  addressId: number;
  streetAddress: string;
  city: string;
  state: string;
  zipcode: string;
}


/*ApiComplexAddress or Address2
* 
*
*/ 
export interface ApiComplexAddress { 
  addressID: string; 
  streetAddress: string; 
  city: string; 
  state: string; 
  country: string; 
  zipcode: string; 
}