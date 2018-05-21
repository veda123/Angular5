import { Component, OnInit } from '@angular/core';
import { LocationPocService } from '../../services/location-poc.service';
import { ILocationPOC } from '../../ILocationPOC';

@Component({
  selector: 'app-location-point-of-contact',
  templateUrl: './location-point-of-contact.component.html',
  styleUrls: ['./location-point-of-contact.component.css']
})
export class LocationPointOfContactComponent implements OnInit {
  errorMessage:string;

  locationPOC:ILocationPOC[]=[];

  constructor(private locationPOCService : LocationPocService) { }

  ngOnInit() {
    this.locationPOCService.getLocationPOC()
        .subscribe(locationPOC =>
          this.locationPOC = locationPOC,
          error => this.errorMessage = <any>error)
  }

}
