/* Address
*
* Matching the model in the API called 
* ApiComplexAddress 
*/ 
export interface Address {
  addressID: string; 
  street: string; 
  city: string; 
  state: string; 
  country: string; 
  zipcode: string; 
}

/* postAddress
*
*/ 
export interface postaddress {  
  street: string; 
  city: string; 
  state: string; 
  country: string; 
  zipcode: string; 
}
