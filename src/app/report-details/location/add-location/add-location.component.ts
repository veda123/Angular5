import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocationService } from '../../../services/location.service';
import{Router}  from '@angular/router';
import { ILocation } from '../../../Ilocation';


@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {
  errorMessage: string;
  // mobnumPattern:string = "(*\+*[1-9]{0,3}\)*-*[1-9]{0,3}[-. /]*\(*[2-9]\d{2}\)*[-. /]*\d{3}[-. /]*\d{4}";
  phoneNumberPattern: string = "[0-9]{10}";
  locNamePattern:string = "[a-zA-Z]+";
  timeZonePattern:string = "[+/-]*[0-9]+";

  constructor(private locationService:LocationService,private router:Router) { }

  locationForm  = new FormGroup({
    locationId     : new FormControl(''),
    locationName   : new FormControl('',[Validators.required,Validators.pattern(this.locNamePattern)]),
    address        : new FormControl('',Validators.required),
    city           : new FormControl('',Validators.required),
    country        : new FormControl('',Validators.required),
    zipcode        : new FormControl('',Validators.required),
    phone          : new FormControl(''),
    timezone       : new FormControl('',[Validators.required,Validators.pattern(this.timeZonePattern)])
  })

  ngOnInit() {
  }

  get locationName()
  {
    return this.locationForm.get('locationName');
  }

  get address()
  {
    return this.locationForm.get('address');
  }

  get city()
  {
    return this.locationForm.get('city');
  }
  get country()
  {
    return this.locationForm.get('country');
  }
  get zipcode()
  {
    return this.locationForm.get('zipcode');
  }
  get phone()
  {
    return this.locationForm.get('phone');
  }
  get timezone()
  {
    return this.locationForm.get('timezone');
  }

  processLocation(location:ILocation){
    this.locationService.addLocation(location)
        .subscribe(location =>{
          console.log(location);
          this.router.navigate(['/admin/location']);

        },
     error => this.errorMessage = <any>error); 
      console.log(location);

  }

}
