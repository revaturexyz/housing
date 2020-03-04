export interface Address {
  addressId: number;
  streetAddress: string;
  city: string;
  state: string;
  zipcode: string;
  country: string; 
}


/*ApiComplexAddress or Address2
*
* Matching the model in the API called 
* ApiComplexAddress 
*/ 
export interface ApiComplexAddress { 
  addressID: string; 
  streetAddress: string; 
  city: string; 
  state: string; 
  country: string; 
  zipcode: string; 
}



/*ApiComplexAddress or Address2
*
* Matching the model in the API called 
* ApiComplexAddress 
*/ 
export interface postaddress {  
  streetAddress: string; 
  city: string; 
  state: string; 
  country: string; 
  zipcode: string; 
}