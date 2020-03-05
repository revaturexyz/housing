import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Old Interfaces Imported 
import { Room } from 'src/interfaces/room'; 

//New Interfaces Imported 
import { postRoom } from 'src/interfaces/room'; 
import { Room2 } from 'src/interfaces/room'; 
import { Complex2 } from 'src/interfaces/complex';
import { postComplex } from 'src/interfaces/complex';
//This Floorplan was depricated and is not included anymore in API 
//import { Floorplan } from 'src/interfaces/floorplan'

@Injectable({
  providedIn: 'root'
})

export class LodgingService {
  
  // need lodging api 
  // this would mount to the endpoint of the enviornment. 
  apiUrl: string = `${environment.endpoints.tenant}` + 'api/';
  httpOptions: any;

  constructor(
    private httpBus: HttpClient
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({})
    };
  }

//#region Complex Methods 

//#region Get Complex Methods 

  /*getComplexes() 
  * Input: no parameters 
  * Returns: all complexes and their contents  
  *     so this should retun a and array of complex objects 
  *     Complex would return complex object defined in complex interface. 
  * 
  *  Complex Object as defined in the  interface complex.ts 
  *  returns ID, Address Object, Provider ID, Complex Name, Contact Number and Array of Amentinties 
  * 
  */
  getComplexes(): Promise<Complex2[]>{ 
    //complexURL needs to be known then 
    var getComplexesURL = this.apiUrl + "complex/" ; 
    return this.httpBus.get<Complex2[]>(getComplexesURL).toPromise(); 
  }

  /*getComplexesById(complexId)
  * inputs: complexID of type string , expected GUID primary key of complex 
  * returns: specific complex , stored in a promise 
  * 
  * API in entities has two models for complex 
  * when the controller is created , the exact entity/model will 
  * be known so if it turns out to be different 
  * the interface will need to be changed 
  */ 
  getComplexesById(complexID: string): Promise<Complex2>{ 
    const getComplexesByIdURL = `${this.apiUrl}complex/${complexID}`;
    return this.httpBus.get<Complex2>(getComplexesByIdURL).toPromise(); 
  }

  
  /*getComplexesByProviderId(ProvidorId)
  * inputs: complexID of type string , expected GUID primary key of complex 
  * returns: specific complex , stored in a promise 
  * 
  * API in entities has two models for complex 
  * when the controller is created , the exact entity/model will 
  * be known so if it turns out to be different 
  * the interface will need to be changed 
  */ 
 getComplexesByProviderId(providerID: string): Promise<Complex2>{ 
  const getComplexesByProviderIdURL = `${this.apiUrl}complex/providerId/${providerID}`;
  return this.httpBus.get<Complex2>(getComplexesByProviderIdURL).toPromise(); 
}
//#endregion 


/*UpdateComplexById(Complex)
*inputs: Complex object to be put in place of existing one in API  
*returns: sucess code 
*
*/
  updateComplexById(updatedComplex: Complex2): Observable<any>{ 
    var getComplexesByIdURL = `${this.apiUrl}complex/${updatedComplex.complexId}`;
    return this.httpBus.put(getComplexesByIdURL, updatedComplex)
  }


/* DeleteComplexById(complexID)
* inputs: complexId  
* sends a HTTP Delete Method at the delete method 
*/ 
  deleteComplexById(complexID: string): Observable<Complex2>{ 
    var getComplexesByIdURL = `${this.apiUrl}/complex/${complexID}`;
    return this.httpBus.delete<Complex2>(getComplexesByIdURL); 
  }

/*Add Complex 
* Input: Complex object 
* Sends a post method to Lodging API to post Complex object 
*/
  addComplex(newComplex: postComplex): Observable<postComplex>{ 
    var PostURl = this.apiUrl + "/complex";
    return this.httpBus.post<postComplex>(PostURl, newComplex);
  }

  
//#endregion





//#region Rooms 

/*getRoomsByComplexId 
* Input: ComplexId of type string - expecting a GUID 
* returns an array of room2 objects 
*/ 
getRoomsByComplexId(complexId: string):Promise<Room2[]>{ 
  //because this method filters rooms and takes an foriegn key it would need a special route 
  // so the route would not be the same as the get rooms by ID 
  var getRoomsByComplexIdURL = this.apiUrl + 'Room/Complex/' + complexId; 
  return this.httpBus.get<Room2[]>(getRoomsByComplexIdURL).toPromise();
}

/*GetRoomById
* Input: RoomId 
* returns an object of type Room specified in the room interface 
*/
getRoomById(RoomId: string): Promise<Room2>{ 
  var getRoomByIdURL = this.apiUrl + 'Room/'+ RoomId; 
  return this.httpBus.get<Room2>(getRoomByIdURL).toPromise();
}



/*addRoom(newroom: room2)
* POST METHOD adding a room 
* input room object 
* returns success code 
*/
addRoom(newRoom: postRoom): Promise<postRoom>{ 
  var PostURl = this.apiUrl + 'Room/'; 
  return this.httpBus.post<postRoom>(PostURl,newRoom).toPromise(); 
}


/*Update Room 
*HTTP PUT - places room object at URL endpoint 
*Input: Room Object to replace old room object; 
*Returns status code 
*/
updateRoom(updatedRoom: Room2): Observable<any>{ 
  var updateRoomURL = this.apiUrl + "Room/" + updatedRoom.roomId; 
  return this.httpBus.put(updateRoomURL, updatedRoom); 
}

/*Delete Room By Id 
* HTTP DELETE at specific ID 
* Input: RoomID 
* Returns success 
*/ 
deleteRoomById(RoomId: string): Observable<Room2>{
  var deleteRoomByIdURL = this.apiUrl + 'Room/'+ RoomId; 
  return this.httpBus.delete<Room2>(deleteRoomByIdURL);
}



//#region Floorplan Depricated 
/*
getFloorPlans(): Promise<Floorplan[]>{ 
  var getFloorPlansURL = this.apiUrl + 'Floorplan/'; 
  return this.httpBus.get<Floorplan[]>(getFloorPlansURL).toPromise();
}
getFloorPlanById(FloorPlanId: string): Promise<Floorplan>{ 
  var getFloorPlanByIdURL =  `${this.apiUrl}/Floorplan/${FloorPlanId}`;
  return this.httpBus.get<Floorplan>(getFloorPlanByIdURL).toPromise(); 
}
addFloorPlan(newFloorPlan: Floorplan): Promise<Floorplan>{ 
  var addFloorPlanURL = this.apiUrl + '/Floorplan/'; 
  return this.httpBus.post<Floorplan>(addFloorPlanURL,newFloorPlan).toPromise();
}
editFloorPlan(updatedFloorPlan: Floorplan): Observable<any>{ 
  var editFloorPlanURL = this.apiUrl + '/Floorplan/';
  return this.httpBus.put(editFloorPlanURL, updatedFloorPlan)
}
deleteFloorPlan(FloorPlanId: string): Observable<Floorplan>{ 
  var deleteFloorPlanURL = this.apiUrl + '/Floorplan' + FloorPlanId; 
  return this.httpBus.delete<Floorplan>(deleteFloorPlanURL); 
}
*/

//#endregion



}//export service 