import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ILocation } from '../Ilocation';


@Injectable()
export class LocationService {
  private baseUrl:string = 'http://localhost:8080/api';
  private headers = new Headers({'Content-type':'application/json'});
  private options = new RequestOptions({headers:this.headers}); 
  // private postUrl : string = 'http://localhost:8080/api/locations'
  constructor(private http: Http) { }

  getLocations(): Observable<ILocation[]> {
    return this.http.get(this.baseUrl+'/locations',this.options)
                .map((response: Response) => <ILocation[]> response.json())
                .catch(this.handleError);
  }

  addLocation(location : ILocation): Observable<ILocation[]> {
    return this.http.post(this.baseUrl+'/location',JSON.stringify(location),this.options)
                .map((response: Response) => <ILocation[]> response.json())
                .catch(this.handleError);
  }

  deleteLocation(id:Number){
    console.log("dele service",id);
    return this.http.delete(this.baseUrl+'/location/'+id,this.options)
                .map((response: Response) => response.json())
                .catch(this.handleError);

  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

}
