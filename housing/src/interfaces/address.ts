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
  zipCode: string;
}

/* postAddress
*
*/
export interface PostAddress {
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}
