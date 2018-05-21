import { Component, OnInit, OnDestroy , ViewChild,ElementRef} from '@angular/core';
import { ILocation } from '../../Ilocation';
import { LocationService } from '../../services/location.service';
import { DataTableResource } from 'angular5-data-table';
import { Subscription } from 'rxjs';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {DataSource} from '@angular/cdk/table';
import * as XLSX from 'xlsx';
// import { CdkTableModule } from '@angular/cdk/table';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit{
  errorMessage: string;
  filterBy : string;
  locations: ILocation[];
  items : ILocation[]=[];
  itemCount :number = 0;
  subscription:Subscription;
  limits = [5, 10, 20, 80];
  tableResource : DataTableResource<ILocation>;
  displayedColumns = ['locationName', 'address', 'city', 'country','zipcode', 'phone','timezone','action'];
  // dataSource: MatTableDataSource<ILocation>;
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort : MatSort;
  @ViewChild('TABLE',{ read: ElementRef }) table: ElementRef;

  constructor( private locationService: LocationService) {
    
   }

   applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
    // this.subscription = this.getLocations();   
    this.getLocations();     
  }

  // ngOnDestroy(){
  //   this.subscription.unsubscribe();

  // }

  getLocations():any{
    console.log("getlocations");
    this.locationService.getLocations()
    .subscribe(locations =>{
       this.locations = locations;
       this.dataSource = new MatTableDataSource(locations);
       this.dataSource.sort = this.sort;
       this.dataSource.paginator = this.paginator;
       this.dataSource.table = this.table;
      },
      error => this.errorMessage = <any>error);  
  }

  delLocation(location:ILocation,id:Number){
    console.log("dellocat");
    console.log(location, id);
    console.log(this.locations.indexOf(location));
    if(!confirm("Are you sure you want to delete this location?")) return;
    this.locationService.deleteLocation(id)
        .subscribe((data)=> {
          console.log("subscribe");
          // this.locations.splice(this.locations.indexOf(location),1);
          this.getLocations();
          console.log("after");
          console.log(this.locations.indexOf(location));
        },
        (error)=>{ this.errorMessage = <any>error;});
    }

    ExportTOExcel()
    {
      console.log("export");
      this.table.nativeElement.style.background = "red";
      const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      
      /* save to file */
      XLSX.writeFile(wb,'SheetJS.xlsx');
      console.log("exported");
      
    }

  }




