import { Injectable } from '@angular/core';
import {Http ,Response} from  '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ILocationPOC } from '../ILocationPOC';

@Injectable()
export class LocationPocService {
  private url = "http://localhost:8080/api/locationsPOC"

  constructor(private http : Http) { }

  getLocationPOC():Observable<ILocationPOC[]>{
    return this.http.get(this.url)
                .map((response:Response) => <ILocationPOC[]> response.json())
                .catch(this.handleError)
  }

  private handleError(error:Response){
    return Observable.throw(error.statusText);
  }

}
