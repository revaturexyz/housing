export interface Address {
  addressId: number;
  streetAddress: string;
  city: string;
  state: string;
  zipcode: string;
}




/* Address2
*
* Matching the model in the API called 
* ApiComplexAddress 
*/ 
export interface Address2 { 
  addressID: string; 
  streetAddress: string; 
  city: string; 
  state: string; 
  country: string; 
  zipcode: string; 
}



/* postAddress
*
*/ 
export interface postaddress {  
  streetAddress: string; 
  city: string; 
  state: string; 
  country: string; 
  zipcode: string; 
}
