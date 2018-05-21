import { Pipe, PipeTransform } from '@angular/core';
import { ILocation } from '../Ilocation';

@Pipe({
  name: 'locationFilter'
})
export class LocationPipe implements PipeTransform {

  transform(value:ILocation[], filterValue: string): ILocation[] {
    filterValue = filterValue ? filterValue.toLowerCase().trim() : null ;
    return filterValue? value.filter((location:ILocation) =>
      // location.locationName.toLowerCase().indexOf(filterValue) !== -1  || location.country.toLowerCase().indexOf(filterValue)!== -1) :value
      location.locationName.toLowerCase().includes(filterValue) || location.country.toLowerCase().includes(filterValue)) :value
  }

}
