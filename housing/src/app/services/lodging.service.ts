import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


// New Interfaces Imported
import { PostRoom } from 'src/interfaces/room';
import { Room } from 'src/interfaces/room';
import { Complex } from 'src/interfaces/complex';
import { PostComplex } from 'src/interfaces/complex';
// This Floorplan was depricated and is not included anymore in API
// import { Floorplan } from 'src/interfaces/floorplan'

@Injectable({
  providedIn: 'root'
})

export class LodgingService {

  // need lodging api
  // this would mount to the endpoint of the enviornment.
  apiUrl = `${environment.endpoints.lodging}api/`;
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
  getComplexes(): Observable<Complex[]> {
    // complexURL needs to be known then
    const getComplexesURL = `${this.apiUrl}complex/`;
    return this.httpBus.get<Complex[]>(getComplexesURL);
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
  getComplexById(complexID: string): Observable<Complex> {
    const getComplexesByIdURL = `${this.apiUrl}complex/${complexID}`;
    return this.httpBus.get<Complex>(getComplexesByIdURL);
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
 getComplexesByProviderId(providerID: string): Observable<Complex[]> {
  const getComplexesByProviderIdURL = `${this.apiUrl}complex/providerId/${providerID}`;
  return this.httpBus.get<Complex[]>(getComplexesByProviderIdURL);
}
//#endregion


/*UpdateComplexById(Complex)
*inputs: Complex object to be put in place of existing one in API
*returns: sucess code
*
*/
  updateComplexById(updatedComplex: Complex): Observable<any> {
    const getComplexesByIdURL = `${this.apiUrl}complex/`;
    return this.httpBus.put(getComplexesByIdURL, updatedComplex);
  }


/* DeleteComplexById(complexID)
* inputs: complexId
* sends a HTTP Delete Method at the delete method
*/
  deleteComplexById(complexID: string): Observable<Complex> {
    const getComplexesByIdURL = `${this.apiUrl}complex/${complexID}`;
    return this.httpBus.delete<Complex>(getComplexesByIdURL);
  }

/*Add Complex
* Input: Complex object
* Sends a post method to Lodging API to post Complex object
*/
  addComplex(newComplex: PostComplex): Observable<PostComplex> {
    const PostURl = `${this.apiUrl}complex/`;
    return this.httpBus.post<PostComplex>(PostURl, newComplex);
  }


//#endregion





//#region Rooms

/*getRoomsByComplexId
* Input: ComplexId of type string - expecting a GUID
* returns an array of room2 objects
* possibly depricated
*/

/*
getRoomsByComplexId(complexId: string):Promise<Room[]>{
  //because this method filters rooms and takes an foriegn key it would need a special route
  // so the route would not be the same as the get rooms by ID
  var getRoomsByComplexIdURL = ${this.apiUrl + 'Room/Complex/' + complexId;
  return this.httpBus.get<Room[]>(getRoomsByComplexIdURL).toPromise();
}
*/

/*getFilteredRooms
* Input: Pass query sting based on parameters
* [FromQuery] string roomNumber,
* [FromQuery] int? numberOfBeds,
* [FromQuery] string roomType,
* [FromQuery] string gender,
* [FromQuery] DateTime? endDate,
* [FromQuery] Guid? roomId,
* [FromQuery] bool? vacancy,
* [FromQuery] bool? empty)
* example: append `?vacancy=false`
* returns rooms that match the values in query string
*/

getFilteredRooms(complexId: string, query: string): Observable<Room[]> {
  const getRoomByIdURL = `${this.apiUrl}Room/complexId/${complexId}?${query}`;
  return this.httpBus.get<Room[]>(getRoomByIdURL);
}

/*GetRoomById
* Input: RoomId
* returns an object of type Room specified in the room interface
*/
getRoomById(RoomId: string): Observable<Room> {
  const getRoomByIdURL = `${this.apiUrl}Room/${RoomId}`;
  return this.httpBus.get<Room>(getRoomByIdURL);
}



/*addRoom(newroom: room)
* POST METHOD adding a room
* input room object
* returns success code
*/
addRoom(newRoom: PostRoom): Observable<PostRoom> {
  const PostURl = `${this.apiUrl}Room/`;
  return this.httpBus.post<PostRoom>(PostURl, newRoom);
}


/*Update Room
*HTTP PUT - places room object at URL endpoint
*Input: Room Object to replace old room object;
*Returns status code
*/
updateRoom(updatedRoom: Room): Observable<any> {
  const updateRoomURL = `${this.apiUrl}Room/${updatedRoom.roomId}`;
  return this.httpBus.put(updateRoomURL, updatedRoom);
}

/*Delete Room By Id
* HTTP DELETE at specific ID
* Input: RoomID
* Returns success
*/
deleteRoomById(RoomId: string): Observable<Room> {
  const deleteRoomByIdURL = `${this.apiUrl}Room/${RoomId}`;
  return this.httpBus.delete<Room>(deleteRoomByIdURL);
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



}// export service
