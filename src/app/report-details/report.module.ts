import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ROUTES } from './report.routes';
import { LocationComponent } from './location/location.component';
import { HeaderComponent } from './header/header.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CommonModule } from "@angular/common";
import { LocationPointOfContactComponent } from './location-point-of-contact/location-point-of-contact.component';
import { LocationPipe } from '../pipes/location.pipe';
import { DataTableModule } from 'angular5-data-table';

import { MatTableModule, MatSortModule , MatPaginatorModule,MatInputModule,MatIconModule,MatNativeDateModule}  from '@angular/material';
import { CdkTableModule} from '@angular/cdk/table';
import {DataSource} from '@angular/cdk/table';
import { AddLocationComponent } from './location/add-location/add-location.component';
import { DeleteLocationComponent } from './location/delete-location/delete-location.component';


@NgModule({
  declarations: [
    LocationComponent,
    HeaderComponent,
    AdminPanelComponent,
    LocationPointOfContactComponent,
    LocationPipe,
    AddLocationComponent,
    DeleteLocationComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    DataTableModule,
    CdkTableModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
    MatNativeDateModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class ReportModule { }
