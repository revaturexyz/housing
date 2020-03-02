import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Address } from 'src/interfaces/address'
import { PostAddress} from 'src/interfaces/post-address'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class AddressService {
  apiUrl: string = `${environment.endpoints.tenant}` + 'api/address/';

  httpOptions: any;

  constructor(
    private httpBus: HttpClient
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({})
    };
  }

  
  
  /*Method: Get Address By ID  
  * Inputs: address id - type string , exprected GUID, to send to API at api/address/{addressId}
  * Description from the API, this would send a get request with the address ID 
  */
  GetAddressById(AddressId: string): Observable<any> {
    const addressUrl = `${this.apiUrl}` + `${AddressId}`;
    return this.httpBus.get<Address>(addressUrl, this.httpOptions);
  }

  /*Method: Post Address
  * Inputs: Address by the interface PostAddress 
  * API DOES NOT HAVE METHOD FOR POSTING ADDRESS 
  * THIS WOULD NEED TO TAKE ALL OTHER INPUTS FROM THE POST ADDRESS INTERFACE 
  * AND GENERATE THE GUID TO POST THE NEW ADDRESSS 
  * 
  * THIS IS A PLACE HOLDER FOR METHOD 
  */
 PostAddress(postAddress: PostAddress): Promise<PostAddress> {
  const postAddressUrl = `${this.apiUrl}` + 'Address/';
  return this.httpBus.post<PostAddress>(postAddressUrl, postAddress).toPromise();
}


}
