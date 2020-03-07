/* Address
*
* Matching the model in the API called 
* ApiComplexAddress 
*/ 
export interface Address {
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
