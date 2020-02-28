import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Interfaces Imported 
import { Complex} from 'src/interfaces/complex'; 
import { Room2 } from 'src/interfaces/room'; 
import { Room } from 'src/interfaces/room'; 
import { Floorplan } from 'src/interfaces/floorplan'

@Injectable({
  providedIn: 'root'
})

export class LodgingService {
  
  // need lodging api 
  // this would mount to the endpoint of the enviornment. 
  apiUrl: string = `${environment.endpoints.tenant}` + 'api/lodging/';
  httpOptions: any;

  constructor(
    private httpBus: HttpClient
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({})
    };
  }

//#region Complex Methods 

  /*getComplexes() 
  * input: no parameters 
  * returns: all complexes and their contents  
  *     so this should retun a and arrayof complex objects 
  * a
  */
  getComplexes(): Promise<Complex[]>{ 
    //complexURL needs to be known then 
    var getComplexesURL = this.apiUrl + "/" ; 
    return this.httpBus.get<Complex[]>(getComplexesURL).toPromise(); 
  }

  /*getComplexesById(complexId)
  * inputs: complexID of type string , expected GUID primary key of complex 
  * returns: specific complex , stored in a promise 
  */ 
  getComplexesById(complexID: string): Promise<Complex>{ 
    //complexID 
    const getComplexesByIdURL = `${this.apiUrl}/complex/${complexID}`;
    return this.httpBus.get<Complex>(getComplexesByIdURL).toPromise(); 
  }


/*UpdateComplexById(Complex)
*inputs: Complex object to be put in place of existing one in API  
*
*/
  updateComplexById(updatedComplex: Complex): Observable<any>{ 
    var getComplexesByIdURL = `${this.apiUrl}/complex/${updatedComplex.complexId}`;
    return this.httpBus.put(getComplexesByIdURL, updatedComplex)
  }


/* DeleteComplexById(complexID)
* inputs: complexId  
* sends a HTTP Delete Method at the delete method 
*/ 
  deleteComplexById(complexID: string): Observable<Complex>{ 
    var getComplexesByIdURL = `${this.apiUrl}/complex/${complexID}`;
    return this.httpBus.delete<Complex>(getComplexesByIdURL); 
  }

/*Add Complex 
* Input: Complex object 
* Sends a post method to Lodging API to post Complex object 
*/
  addComplex(newComplex: Complex): Observable<Complex>{ 
    var PostURl = this.apiUrl + "/complex";
    return this.httpBus.post<Complex>(PostURl, newComplex);
  }

//#endregion

//#region  Rooms 

/*getRoomsByComplexId 
* Input: ComplexId of type string - expecting a GUID 
*retruns an object of type 
*/ 
getRoomsByComplexId(complexId: string):Promise<Room>{ 
  //because this method filters rooms and takes an foriegn key it would need a special route 
  // so the route would not be the same as the get rooms by ID 
  //would 
  var getRoomsByComplexIdURL = this.apiUrl + 'Room/ByComplex/' + complexId; 
  return this.httpBus.get<Room2>(getRoomsByComplexIdURL).toPromise();
}
/*getRoomsByComplexIdRoom2
* Input: ComplexId of type string - expecting a GUID 
*returns an object of type Room2 specified in Room interface  
*/ 
getRoomsByComplexIdRoom2(complexId: string):Promise<Room2>{ 
  //because this method filters rooms and takes an foriegn key it would need a special route 
  // so the route would not be the same as the get rooms by ID 
  //not by a specific 
  var getRoomsByComplexIdURL = this.apiUrl + 'Room/ByComplex/' + complexId; 
  return this.httpBus.get<Room2>(getRoomsByComplexIdURL).toPromise(); 
}


/*GetRoomById
* Input: RoomId 
* returns an object of type Room specified in the room interface 
*/
getRoomById(RoomId: string): Promise<Room>{ 
  var getRoomByIdURL = this.apiUrl + 'Room/'+ RoomId; 
  return this.httpBus.get<Room>(getRoomByIdURL).toPromise();
}
/*GetRoomByIdRoom2
* Input: RoomId 
* returns an object of type Room2 specified in the room interface 
*/
getRoomByIdRoom2(RoomId: string): Promise<Room2>{ 
  var getRoomByIdURL = this.apiUrl + 'Room/' + RoomId; 
  return this.httpBus.get<Room2>(getRoomByIdURL).toPromise();
}

updateRoom(updatedRoom: Room2): Observable<any>{ 
  var updateRoomURL = this.apiUrl + "/"; 
  return this.httpBus.put(updateRoomURL, updatedRoom); 
}

deleteRoomById(RoomId: string): Observable<Room2>{
  var deleteRoomByIdURL = this.apiUrl + 'Room/'+ RoomId; 
  return this.httpBus.delete<Room2>(deleteRoomByIdURL);
}

addRoom(newRoom: Room2): Promise<Room2>{ 
  var PostURl = this.apiUrl + 'Room/'; 
  return this.httpBus.post<Room2>(PostURl,newRoom).toPromise(); 
}


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

//#endregion






}//export service 
